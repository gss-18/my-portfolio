export default function Contact() {
    return (
      <div className="bg-gray-100 py-20 px-10" id="contact">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-8 text-gray-700">
            Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
          </p>
          <div className="flex justify-center mt-4">
            <a href="mailto:gsstrivikram18@gmail.com" className="text-blue-500 mx-4">Email</a>
            <a href="https://www.linkedin.com/in/gss-trivikram/" className="text-blue-500 mx-4">LinkedIn</a>
            <a href="https://github.com/gss-18" className="text-blue-500 mx-4">GitHub</a>
          </div>
        </div>
      </div>
    );
  }
  