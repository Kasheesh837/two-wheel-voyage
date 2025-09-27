import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Calculator, DollarSign, Calendar, Percent } from "lucide-react";
import { useState, useEffect } from "react";

const EMICalculator = () => {
  const [vehiclePrice, setVehiclePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(50000);
  const [loanTenure, setLoanTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(9.5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [vehiclePrice, downPayment, loanTenure, interestRate]);

  const calculateEMI = () => {
    const principal = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTenure;

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalAmount(0);
      return;
    }

    const emiAmount = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = emiAmount * numberOfPayments;
    const totalInterestAmount = totalPayment - principal;

    setEmi(Math.round(emiAmount));
    setTotalInterest(Math.round(totalInterestAmount));
    setTotalAmount(Math.round(totalPayment + downPayment));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-2">EMI Calculator</h1>
        <p className="text-muted-foreground">
          Calculate your monthly payments and plan your budget
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Loan Details</h2>
          
          <div className="space-y-6">
            <div>
              <Label htmlFor="vehiclePrice" className="text-sm font-medium mb-2 block">
                Vehicle Price
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="vehiclePrice"
                  type="number"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Number(e.target.value))}
                  className="pl-10"
                  placeholder="Enter vehicle price"
                />
              </div>
              <Slider
                value={[vehiclePrice]}
                onValueChange={(value) => setVehiclePrice(value[0])}
                max={2000000}
                min={50000}
                step={10000}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹50K</span>
                <span>₹20L</span>
              </div>
            </div>

            <div>
              <Label htmlFor="downPayment" className="text-sm font-medium mb-2 block">
                Down Payment
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="pl-10"
                  placeholder="Enter down payment"
                />
              </div>
              <Slider
                value={[downPayment]}
                onValueChange={(value) => setDownPayment(value[0])}
                max={vehiclePrice * 0.8}
                min={0}
                step={5000}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>₹0</span>
                <span>₹{Math.round(vehiclePrice * 0.8 / 1000)}K</span>
              </div>
            </div>

            <div>
              <Label htmlFor="loanTenure" className="text-sm font-medium mb-2 block">
                Loan Tenure (Months)
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="loanTenure"
                  type="number"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(Number(e.target.value))}
                  className="pl-10"
                  placeholder="Enter loan tenure"
                />
              </div>
              <Slider
                value={[loanTenure]}
                onValueChange={(value) => setLoanTenure(value[0])}
                max={84}
                min={6}
                step={6}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>6 months</span>
                <span>84 months</span>
              </div>
            </div>

            <div>
              <Label htmlFor="interestRate" className="text-sm font-medium mb-2 block">
                Interest Rate (% per annum)
              </Label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="pl-10"
                  placeholder="Enter interest rate"
                />
              </div>
              <Slider
                value={[interestRate]}
                onValueChange={(value) => setInterestRate(value[0])}
                max={20}
                min={5}
                step={0.1}
                className="mt-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Results Section */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">EMI Breakdown</h2>
          
          <div className="space-y-4">
            <div className="bg-gradient-primary text-white p-4 rounded-lg">
              <div className="text-center">
                <div className="text-sm opacity-90 mb-1">Monthly EMI</div>
                <div className="text-3xl font-bold">{formatCurrency(emi)}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Principal Amount</div>
                <div className="text-xl font-semibold text-primary">
                  {formatCurrency(vehiclePrice - downPayment)}
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Total Interest</div>
                <div className="text-xl font-semibold text-accent">
                  {formatCurrency(totalInterest)}
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="text-sm text-muted-foreground mb-1">Total Amount Payable</div>
                <div className="text-xl font-semibold text-foreground">
                  {formatCurrency(totalAmount)}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Down Payment:</span>
                <span className="font-medium">{formatCurrency(downPayment)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Loan Tenure:</span>
                <span className="font-medium">{loanTenure} months ({Math.round(loanTenure/12)} years)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Interest Rate:</span>
                <span className="font-medium">{interestRate}% p.a.</span>
              </div>
            </div>
          </div>

          <Button variant="cta" className="w-full mt-6">
            Apply for Loan
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default EMICalculator;