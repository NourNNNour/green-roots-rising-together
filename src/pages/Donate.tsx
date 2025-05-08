
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Leaf, Heart, CreditCard, Calendar, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

const Donate = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<number>(25);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleDonation = async (type: string) => {
    if (donationAmount < 1) {
      toast({
        title: t('donate.error'),
        description: t('donate.minAmount'),
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);

    try {
      // In a real app, this would call the payment processing API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t('donate.success'),
        description: t('donate.thankYou'),
      });
      
      // Reset form
      setDonationAmount(25);
    } catch (error) {
      toast({
        title: t('donate.error'),
        description: t('donate.tryAgain'),
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const predefinedAmounts = [10, 25, 50, 100];

  return (
    <MainLayout>
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {t('donate.title')}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            {t('donate.description')}
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="onetime" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="onetime">{t('donate.oneTime')}</TabsTrigger>
              <TabsTrigger value="monthly">{t('donate.monthly')}</TabsTrigger>
            </TabsList>

            <TabsContent value="onetime">
              <Card>
                <CardHeader>
                  <CardTitle>{t('donate.oneTimeTitle')}</CardTitle>
                  <CardDescription>{t('donate.oneTimeDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">{t('donate.amount')}</label>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {predefinedAmounts.map(amount => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount ? "default" : "outline"}
                          className={donationAmount === amount ? "bg-green-500 hover:bg-green-600" : ""}
                          onClick={() => setDonationAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <label className="block text-sm font-medium mr-2">{t('donate.custom')}</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                        <Input
                          type="number"
                          min="1"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                          className="pl-7"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setDonationAmount(25)}
                  >
                    {t('donate.reset')}
                  </Button>
                  <Button 
                    disabled={isProcessing} 
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => handleDonation('onetime')}
                  >
                    {isProcessing ? t('donate.processing') : t('donate.donateNow')}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="monthly">
              <Card>
                <CardHeader>
                  <CardTitle>{t('donate.monthlyTitle')}</CardTitle>
                  <CardDescription>{t('donate.monthlyDescription')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">{t('donate.amount')}</label>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {predefinedAmounts.map(amount => (
                        <Button
                          key={amount}
                          variant={donationAmount === amount ? "default" : "outline"}
                          className={donationAmount === amount ? "bg-green-500 hover:bg-green-600" : ""}
                          onClick={() => setDonationAmount(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <label className="block text-sm font-medium mr-2">{t('donate.custom')}</label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">$</span>
                        <Input
                          type="number"
                          min="1"
                          value={donationAmount}
                          onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                          className="pl-7"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setDonationAmount(25)}
                  >
                    {t('donate.reset')}
                  </Button>
                  <Button 
                    disabled={isProcessing} 
                    className="bg-green-500 hover:bg-green-600"
                    onClick={() => handleDonation('monthly')}
                  >
                    {isProcessing ? t('donate.processing') : t('donate.subscribeDonation')}
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Impact section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-green-700">{t('donate.impactTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 text-green-600 rounded-full p-3 inline-flex">
                      <Leaf className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-center text-lg mb-2">${predefinedAmounts[0]}</h3>
                  <p className="text-gray-600 text-center text-sm">
                    {t('donate.impact1')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 text-green-600 rounded-full p-3 inline-flex">
                      <Users className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-center text-lg mb-2">${predefinedAmounts[1]}</h3>
                  <p className="text-gray-600 text-center text-sm">
                    {t('donate.impact2')}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 text-green-600 rounded-full p-3 inline-flex">
                      <Heart className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-bold text-center text-lg mb-2">${predefinedAmounts[2]}</h3>
                  <p className="text-gray-600 text-center text-sm">
                    {t('donate.impact3')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Donate;
