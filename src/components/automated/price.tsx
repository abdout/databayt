
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const Price = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 px-6 gap-10">
      <Image src="/trial.png" alt="Trial Image" width={250} height={250} className="rounded-md" />
      <Card className="shadow-none border-none bg-background p-6 max-w-md w-full">
      <CardContent className="flex flex-col items-center text-center">
  <h4 className="text-7xl font-bold mb-4">$10</h4>
  <p className="text-sm font-medium  mb-2">
    Per Month After Trial
  </p>
  <p className="text-sm text-muted-foreground mb-2">
    No credit card required for now
  </p>
  <p className="text-sm text-muted-foreground mb-4">
  Easy to cancel
  </p>
  <Button>Start Free Trial</Button>
</CardContent>

        {/* <CardFooter className="flex flex-col gap-2 mt-6">
          <p className="text-sm font-medium">What's included:</p>
          <ul className="text-sm text-muted-foreground list-disc list-inside">
            <li>Unlimited access to all features</li>
            <li>Priority customer support</li>
            <li>Cancel anytime</li>
          </ul>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default Price;
