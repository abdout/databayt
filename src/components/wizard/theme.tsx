// components/wizard/theme.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
type ThemeColor = 'zinc' | 'red' | 'orange' | 'green' | 'blue' | 'yellow' | 'violet';

interface ThemeColors {
  [key: string]: string;
}

const THEME_COLORS: ThemeColors = {
  zinc: "#71717A",
  red: "#EF4444",
  orange: "#F97316",
  green: "#22C55E",
  blue: "#3B82F6",
  yellow: "#EAB308",
  violet: "#8B5CF6"
};

const RADIUS_OPTIONS: number[] = [0, 0.3, 0.5, 0.75, 1.0];

interface StyleProps {
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  color?: string;
}

interface ThemeSelectorProps {
  selectedColor?: string;
  selectedRadius?: number;
  onSelect: (color: string, radius: number) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  selectedColor = 'zinc',
  selectedRadius = 0.5,
  onSelect
}) => {
  const [color, setColor] = React.useState<ThemeColor>(selectedColor as ThemeColor);
  const [borderRadius, setBorderRadius] = React.useState<number>(selectedRadius);

  React.useEffect(() => {
    onSelect(color, borderRadius);
  }, [color, borderRadius, onSelect]);

  const getButtonClassName = (isSelected: boolean): string => `
    flex items-center 
    ${isSelected 
      ? 'bg-gray-200 p-2 rounded-full' 
      : ''}
    hover:bg-gray-200 p-2 rounded-full
  `;

  const getRadiusButtonClassName = (isSelected: boolean): string => `
    px-4 py-2 rounded-lg
    ${isSelected 
      ? '' 
      : 'opacity-50'}
    hover:opacity-100
  `;

  const getPreviewCardStyle = (): StyleProps => ({
    borderRadius: `${borderRadius * 16}px`,
    borderColor: THEME_COLORS[color]
  });

  const getPrimaryButtonStyle = (): StyleProps => ({
    backgroundColor: THEME_COLORS[color],
    borderRadius: `${borderRadius * 16}px`
  });

  const getSecondaryButtonStyle = (): StyleProps => ({
    color: THEME_COLORS[color],
    borderColor: THEME_COLORS[color],
    borderRadius: `${borderRadius * 16}px`
  });

  return (
    <div className="w-full -mt-4">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-2xl md:text-5xl flex items-center justify-center pb-7">
        Custom Theme!
      </h2>
      <div className="space-y-2">
        <div className='flex items-center justify-center space-x-8'>
        <div className="space-y-2">
          <h3 className="text-base font-medium">Color</h3>
          <div className="flex gap-2">
            {Object.entries(THEME_COLORS).map(([name, colorValue]) => (
              <button
                
                key={name}
                onClick={() => setColor(name as ThemeColor)}
                className={getButtonClassName(color === name)}
              >
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: colorValue }}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="h-10 w-[1px] bg-gray-400"></div>


        <div className="">
          <h3 className="text-base font-medium">Radius</h3>
          <div className="flex gap-1">
            {RADIUS_OPTIONS.map((radius) => (
              <button
                key={radius}
                onClick={() => setBorderRadius(radius)}
                className={getRadiusButtonClassName(borderRadius === radius)}
              >
                {radius}
              </button>
            ))}
          </div>
        </div>
        </div>

        <Card 
          className="w-full h-40"
          style={getPreviewCardStyle()}
        >
          <CardHeader>
            <CardTitle style={{ color: THEME_COLORS[color] }}>
              Theme Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 -mt-2">
            <p className="text-gray-600">
              See how your selected theme affects various UI components
            </p>
            <div className="space-x-4">
              <Button
                style={getPrimaryButtonStyle()}
              >
                Primary Button
              </Button>
              <Button
                variant="outline"
                style={getSecondaryButtonStyle()}
              >
                Secondary Button
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThemeSelector;