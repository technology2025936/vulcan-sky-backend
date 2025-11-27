export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "enquiries@flyvulcan.co.za",
        from: "smtp@flyvulcan.co.za",
        subject: "New Aviation Enquiry",
        html: `
          <h2>Aviation Enquiry Form Submission</h2>
          <p><strong>Name:</strong> ${result.fullName}</p>
          <p><strong>Email:</strong> ${result.email}</p>
          <p><strong>Phone:</strong> ${result.phone}</p>
          <p><strong>DOB:</strong> ${result.dob}</p>
          <p><strong>Height:</strong> ${result.height}</p>
          <p><strong>Education:</strong> ${result.education}</p>
          <p><strong>Licence:</strong> ${result.licence}</p>
          <p><strong>Medical:</strong> ${result.medical}</p>
          <p><strong>English:</strong> ${result.english}</p>
          <p><strong>Career Goal:</strong> ${result.careerGoal}</p>
          <p><strong>Citizenship:</strong> ${result.citizenship}</p>
        `,
      });

      console.log("Email sent for Aviation Enquiry");
    } catch (err) {
      console.error("Email send error:", err);
    }
  },
};
