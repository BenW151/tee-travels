import { EmailMessage } from 'cloudflare:email';
import { createMimeMessage } from 'mimetext';

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return handleOptions();
    }

    if (request.method === 'POST') {
      try {
        const data = await request.json();
        const { name, email, destination, message } = data;

        if (!name || !email || !message) {
          return new Response(JSON.stringify({ message: 'Invalid form data' }), {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          });
        }

        // Generate a timestamp
        const timestamp = new Date().toISOString();
        const dataWithTimestamp = { ...data, timestamp };

        // Write to KV Storage
        const kvKey = `contact:${Date.now()}`;
        await env.WHY_NOT_ADVENTURES_CONTACT_KV.put(kvKey, JSON.stringify(dataWithTimestamp));

        // Prepare and send email
        const msg = createMimeMessage();
        msg.setSender({ name: "Why Not Adventures", addr: "noreply@whynotadventures.co.uk" });
        msg.setRecipient("contact@whynotadventures.co.uk");
        msg.setSubject("New Contact Form Submission");
        msg.addMessage({
          contentType: 'text/plain',
          data: `Name: ${name}\nEmail: ${email}\nDestination: ${destination}\nMessage: ${message}`
        });

        const emailMessage = new EmailMessage(
          "noreply@whynotadventures.co.uk",
          "contact@whynotadventures.co.uk",
          msg.asRaw()
        );

        await env.emailSender.send(emailMessage);

        return new Response(JSON.stringify({ message: 'Form submitted, email sent, and data stored successfully' }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (error) {
        return new Response(JSON.stringify({ message: `Failed to process request: ${error.message}` }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      }
    }

    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

function handleOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
