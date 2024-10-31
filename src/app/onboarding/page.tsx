import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function Onboarding() {
    return (
      <main className="bg-slate-100 w-full h-screen flex justify-center items-center">
        <div>
            <div className="bg-white px-10 py-5 rounded-md">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Onboarding
              </h2>
              <div className="mt-4">
                <Input type="file" />
              </div>
              <div className="mt-4">
                <Input label="Name" placeholder="Enter your Name" />
              </div>
              <div className="mt-4">
                <Input label="Profession" placeholder="Enter your Name" />
              </div>
              <div className="mt-4">
                <Textarea label="How do you plan to use this application" placeholder="I plan to simplify my content creation journey" />
              </div>
              <div className="mt-4 flex flex-row justify-center">
                <Button variant="solid" color="primary">
                  Submit
                </Button>
              </div>
            </div>
        </div>
      </main>
    );
  }
  