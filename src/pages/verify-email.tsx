import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";

export default function VerifyEmail() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Container className="flex-1 flex items-center justify-center py-12">
        <Card className="w-full max-w-md p-6 text-center space-y-4">
          <h1 className="text-2xl font-semibold">Check your email</h1>
          <p className="text-muted-foreground">
            We've sent you a verification link. Please check your email to
            verify your account.
          </p>
        </Card>
      </Container>
    </div>
  );
}
