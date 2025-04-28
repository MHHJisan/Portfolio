import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start p-10 md:p-20"
    >
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-primary">Jisan</span>
      </h1>
      <h3 className="text-2xl md:text-4xl mt-4 text-muted-foreground">
        Software Developer
      </h3>
      <p className="mt-6 text-lg max-w-2xl">
        I am eager to take challenges and tackle them using knowledge,
        perception and innovation to pursue long term success career in dynamic
        and professional environment of any organization through my attitude,
        hard work, dedication and determination.
      </p>

      <div className="flex gap-4 mt-6">
        <Button>Hire Me</Button>
        <Button variant="outline">Let's Talk</Button>
      </div>

      <div className="flex gap-6 mt-8 text-primary">
        <Facebook size={28} />
        <Linkedin size={28} />
        <Youtube size={28} />
        <Instagram size={28} />
      </div>
    </section>
  );
}
