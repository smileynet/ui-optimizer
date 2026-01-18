import { useState } from 'react';
import { Button, Card, Container, Stack, Input, Badge } from '../components/ui';

function SearchIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

export function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('');
  const [loadingButton, setLoadingButton] = useState<string | null>(null);

  const handleLoadingDemo = (buttonId: string) => {
    setLoadingButton(buttonId);
    setTimeout(() => setLoadingButton(null), 2000);
  };

  return (
    <Container>
      <Stack gap={8}>
        <div>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
            Components
          </h2>
          <p className="text-[var(--color-text-secondary)]">
            Reusable UI components with consistent design tokens and accessibility.
          </p>
        </div>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Button</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Five variants, three sizes, with loading and icon support
            </p>
          </Card.Header>
          <Card.Body>
            <Stack gap={6}>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Variants</p>
                <Stack direction="horizontal" gap={3} wrap>
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="danger">Danger</Button>
                </Stack>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Sizes</p>
                <Stack direction="horizontal" gap={3} align="center" wrap>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </Stack>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">With Icons</p>
                <Stack direction="horizontal" gap={3} wrap>
                  <Button leftIcon={<CheckIcon />}>Confirm</Button>
                  <Button rightIcon={<ArrowRightIcon />}>Continue</Button>
                  <Button leftIcon={<MailIcon />} variant="secondary">
                    Send Email
                  </Button>
                </Stack>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">States</p>
                <Stack direction="horizontal" gap={3} wrap>
                  <Button disabled>Disabled</Button>
                  <Button 
                    loading={loadingButton === 'demo1'}
                    onClick={() => handleLoadingDemo('demo1')}
                  >
                    {loadingButton === 'demo1' ? 'Saving...' : 'Click to Load'}
                  </Button>
                  <Button fullWidth className="max-w-xs">Full Width</Button>
                </Stack>
              </div>
            </Stack>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Input</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Form input with label, hint, error, and icon support
            </p>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Stack gap={4}>
                <Input 
                  label="Basic Input" 
                  placeholder="Enter text..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <Input 
                  label="With Hint" 
                  placeholder="username@example.com"
                  hint="We'll never share your email"
                />
                <Input 
                  label="With Error" 
                  placeholder="Password"
                  type="password"
                  error="Password must be at least 8 characters"
                  defaultValue="short"
                />
              </Stack>

              <Stack gap={4}>
                <Input 
                  label="With Left Icon" 
                  placeholder="Search..."
                  leftIcon={<SearchIcon />}
                />
                <Input 
                  label="With Right Icon" 
                  placeholder="Email address"
                  rightIcon={<MailIcon />}
                />
                <Input 
                  label="Disabled" 
                  placeholder="Cannot edit"
                  disabled
                  defaultValue="Disabled value"
                />
              </Stack>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Badge</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Status indicators with semantic colors
            </p>
          </Card.Header>
          <Card.Body>
            <Stack gap={4}>
              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Variants</p>
                <Stack direction="horizontal" gap={2} wrap>
                  <Badge>Default</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </Stack>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">Sizes</p>
                <Stack direction="horizontal" gap={2} align="center">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                </Stack>
              </div>

              <div>
                <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-3">In Context</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--color-text-primary)]">Order #1234</span>
                    <Badge variant="success">Completed</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--color-text-primary)]">Order #1235</span>
                    <Badge variant="warning">Pending</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[var(--color-text-primary)]">Order #1236</span>
                    <Badge variant="error">Cancelled</Badge>
                  </div>
                </div>
              </div>
            </Stack>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Card</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Container component with three variants
            </p>
          </Card.Header>
          <Card.Body>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <Card.Body>
                  <Stack gap={2}>
                    <h4 className="font-semibold text-[var(--color-text-primary)]">Elevated</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Default variant with shadow for layered effect
                    </p>
                  </Stack>
                </Card.Body>
              </Card>

              <Card variant="outlined">
                <Card.Body>
                  <Stack gap={2}>
                    <h4 className="font-semibold text-[var(--color-text-primary)]">Outlined</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Border variant for flat designs
                    </p>
                  </Stack>
                </Card.Body>
              </Card>

              <Card variant="filled">
                <Card.Body>
                  <Stack gap={2}>
                    <h4 className="font-semibold text-[var(--color-text-primary)]">Filled</h4>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      Subtle background for grouped content
                    </p>
                  </Stack>
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header>
            <h3 className="font-semibold text-[var(--color-text-primary)]">Card Structure</h3>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">
              Compound component with Header, Body, and Footer
            </p>
          </Card.Header>
          <Card.Body>
            <div className="max-w-md mx-auto">
              <Card variant="outlined">
                <Card.Header>
                  <Stack direction="horizontal" justify="between" align="center">
                    <div>
                      <h4 className="font-semibold text-[var(--color-text-primary)]">Subscription Plan</h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">Pro Monthly</p>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </Stack>
                </Card.Header>
                <Card.Body>
                  <Stack gap={3}>
                    <div className="flex justify-between">
                      <span className="text-sm text-[var(--color-text-secondary)]">Next billing</span>
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">Jan 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-[var(--color-text-secondary)]">Amount</span>
                      <span className="text-sm font-medium text-[var(--color-text-primary)]">$29/month</span>
                    </div>
                  </Stack>
                </Card.Body>
                <Card.Footer>
                  <Stack direction="horizontal" justify="between" align="center">
                    <Button variant="ghost" size="sm">Cancel Plan</Button>
                    <Button size="sm">Upgrade</Button>
                  </Stack>
                </Card.Footer>
              </Card>
            </div>
          </Card.Body>
        </Card>

        <Card variant="filled">
          <Card.Body>
            <Stack gap={4}>
              <h3 className="font-semibold text-[var(--color-text-primary)]">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Consistency</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    All components use the same design tokens for colors, spacing, and typography.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Accessibility</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Focus states, ARIA labels, and keyboard navigation built in.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-primary)] mb-2">Composability</p>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Components combine naturally with flexible props and compound patterns.
                  </p>
                </div>
              </div>
            </Stack>
          </Card.Body>
        </Card>
      </Stack>
    </Container>
  );
}
