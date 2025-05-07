
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    country: '',
    volunteerInterest: false,
    phone: '',
    interests: [] as string[]
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate passwords
    if (formData.password !== formData.passwordConfirm) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call for registration
    setTimeout(() => {
      toast({
        title: "Registration Successful",
        description: "Welcome to the GreenRoots community!",
      });
      setIsLoading(false);
      // In a real app, we would redirect or update auth state
    }, 1500);
  };

  const handleCountryChange = (value: string) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, interest] };
      } else {
        return { ...prev, interests: prev.interests.filter(i => i !== interest) };
      }
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8}
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-2">
          <Label htmlFor="passwordConfirm">Confirm Password</Label>
          <Input
            id="passwordConfirm"
            name="passwordConfirm"
            type="password"
            value={formData.passwordConfirm}
            onChange={handleChange}
            required
          />
        </div>

        {/* Country */}
        <div className="space-y-2">
          <Label htmlFor="country">Country/Region</Label>
          <Select onValueChange={handleCountryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select your country/region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Volunteer Interest Checkbox */}
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="volunteerInterest" 
            name="volunteerInterest"
            checked={formData.volunteerInterest} 
            onCheckedChange={(checked) => {
              if (typeof checked === "boolean") {
                setFormData(prev => ({ ...prev, volunteerInterest: checked }));
              }
            }} 
          />
          <Label htmlFor="volunteerInterest" className="text-sm font-normal">
            I am interested in volunteering
          </Label>
        </div>

        {/* Conditional Fields for Volunteers */}
        {formData.volunteerInterest && (
          <div className="space-y-4 pt-2 border-t border-gray-200">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number (optional)</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label className="block mb-2">Areas of Interest</Label>
              <div className="space-y-2">
                {['Tree Planting', 'Cleanup', 'Education', 'Fundraising'].map(interest => (
                  <div key={interest} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`interest-${interest}`}
                      checked={formData.interests.includes(interest)} 
                      onCheckedChange={(checked) => {
                        if (typeof checked === "boolean") {
                          handleInterestChange(interest, checked);
                        }
                      }} 
                    />
                    <Label htmlFor={`interest-${interest}`} className="text-sm font-normal">{interest}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <Button type="submit" className="w-full bg-green-500 hover:bg-green-600" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Sign up"}
        </Button>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:text-green-700 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
