import { Button } from "@nextui-org/button";

export default function Auth() {
    return (
      <main className="bg-slate-100 w-full h-screen flex justify-center items-center">
        <div>
            <div className="bg-white px-10 py-5 rounded-md">
              <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
                Collab Cloud
              </h2>
              <div className="mt-4">
                <Button variant="solid" color="primary">
                  Sign In with Google
                </Button>
              </div>
            </div>
        </div>
    </main>
    );
  }
  