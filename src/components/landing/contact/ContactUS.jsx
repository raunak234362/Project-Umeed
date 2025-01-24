/* eslint-disable no-unused-vars */
import { Phone, Mail, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import Input from "../../fields/Input";
import Button from "../../fields/Button";

const ContactUS = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-200 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">Contact Us</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Reach out to us for any inquiries or support
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* Contact Form */}
          <div className="p-5 bg-white rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <label>Name</label>
                <input
                  type="text"
                  className="w-full border border-blue-gray-300 p-2 rounded-lg"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div className="space-y-4">
                <label>Email</label>
                <input
                  type="text"
                  className="w-full border border-blue-gray-300 p-2 rounded-lg"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div className="space-y-4">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="w-full border border-blue-gray-300 p-2 rounded-lg"
                  {...register("name", { required: "Name is required" })}
                />
              </div>
              <div className="space-y-4">
                <label>Message</label>
                <textarea
                  className="w-full border border-blue-gray-300 p-2 rounded-lg"
                  {...register("message", { required: "Message is required" })}
                />
              </div>
              <div className="w-full justify-center flex">
                <Button className="w-full" type="submit">Submit</Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Get in Touch */}
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div>
                <div className="text-xl text-blue-600">Get in Touch</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a
                      href="tel:+917398282238"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +91 73982 82238
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full">
                    <Mail className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <div className="font-medium">Social Media</div>
                    <a
                      href="https://instagram.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      Instagram: @umeedkiran_
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Official Registration */}
            <div className="bg-orange-50 rounded-lg p-5 shadow-md">
              <div>
                <div className="text-xl text-blue-600">
                  Official Registration
                </div>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>PWD Act Registered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>12A Registration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span>80G Registration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
