export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "enquiries@flyvulcan.co.za",
        from: "smtp@flyvulcan.co.za",
        subject: "New Quick Links Enquiry",
        html: `
          <h2>New Quick Links Enquiry</h2>
          <p><strong>Name:</strong> ${result.name}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Phone:</strong> ${result.phone}</p>
          <p><strong>Download Type:</strong> ${result.downloadType}</p>
        `,
      });

      console.log("Email sent for Quick Links Enquiry");
    } catch (err) {
      console.error("Email send error:", err);
    }
  },
};
