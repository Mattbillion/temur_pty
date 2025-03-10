// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// const formSchema = z.object({
//   email: z.string().email(),
//   firstName: z.string(),
//   lastName: z.string(),
//   unsubscribe: z.boolean(),
// });

export const ContactForm = () => {
  /*const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      unsubscribe: false,
    },
  });*/

  /*function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }*/

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus("Adding contact...");
  //
  //   try {
  //     const response = await fetch("/api/add-contact", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //
  //     const result = await response.json();
  //     if (response.ok) {
  //       setStatus("Contact added successfully!");
  //     } else {
  //       setStatus(`Error: ${result.error}`);
  //     }
  //   } catch (error) {
  //     setStatus("Failed to add contact.");
  //   }
  // };

  return null;
};
