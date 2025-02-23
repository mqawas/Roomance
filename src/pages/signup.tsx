import { AuthForm } from "@/components/auth/auth-form";
import { Container } from "@/components/ui/container";

export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Container className="flex-1 flex items-center justify-center py-12">
        <AuthForm type="signup" />
      </Container>
    </div>
  );
}
