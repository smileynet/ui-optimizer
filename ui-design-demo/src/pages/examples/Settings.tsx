import { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Stack } from '../../components/ui/Stack';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Badge } from '../../components/ui/Badge';
import { cn } from '../../lib/utils';

// --- Icons ---
function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function BellIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  );
}

function SlidersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function UploadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
  );
}

// --- Inline Components ---

function Toggle({ checked, onChange, label, description }: { checked: boolean; onChange: (checked: boolean) => void; label: string; description?: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div className="flex flex-col gap-1">
        <label className="text-[var(--text-sm)] font-medium text-[var(--color-text-primary)]">{label}</label>
        {description && <p className="text-[var(--text-xs)] text-[var(--color-text-secondary)]">{description}</p>}
      </div>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={cn(
          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] focus:ring-offset-2",
          checked ? "bg-[var(--color-primary)]" : "bg-[var(--stone-300)] dark:bg-[var(--zinc-600)]"
        )}
      >
        <span
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            checked ? "translate-x-5" : "translate-x-0"
          )}
        />
      </button>
    </div>
  );
}

// --- Page Component ---

type Tab = 'profile' | 'preferences' | 'notifications';

export function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>('profile');
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [firstName, setFirstName] = useState('Alex');
  const [lastName, setLastName] = useState('Morgan');
  const [email, setEmail] = useState('alex.morgan@example.com');
  const [bio, setBio] = useState('Product designer who loves gradients and whitespace.');
  
  // Preferences State
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);

  const handleSave = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: UserIcon },
    { id: 'preferences', label: 'Preferences', icon: SlidersIcon },
    { id: 'notifications', label: 'Notifications', icon: BellIcon },
  ] as const;

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] py-8">
      <Container size="lg">
        <div className="mb-8">
          <h1 className="text-[var(--text-3xl)] font-bold text-[var(--color-text-primary)] tracking-tight">Settings</h1>
          <p className="mt-2 text-[var(--text-base)] text-[var(--color-text-secondary)]">
            Manage your account settings and preferences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 text-[var(--text-sm)] font-medium rounded-[var(--radius-lg)] transition-all whitespace-nowrap",
                      isActive 
                        ? "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] shadow-[var(--shadow-sm)] ring-1 ring-[var(--color-border)]" 
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-subtle)]"
                    )}
                  >
                    <Icon className={cn("w-5 h-5", isActive ? "text-[var(--color-primary)]" : "text-current")} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 space-y-6">
            
            {/* Profile Section */}
            {activeTab === 'profile' && (
              <Stack gap={6}>
                <Card variant="outlined">
                  <Card.Header>
                    <h2 className="text-[var(--text-lg)] font-semibold text-[var(--color-text-primary)]">Public Profile</h2>
                    <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">This information will be displayed publicly.</p>
                  </Card.Header>
                  <Card.Body className="space-y-6">
                    {/* Avatar Upload */}
                    <div className="flex items-center gap-6">
                      <div className="relative group">
                        <div className="w-20 h-20 rounded-full bg-[var(--blue-100)] flex items-center justify-center text-[var(--blue-600)] text-[var(--text-2xl)] font-semibold border-4 border-[var(--color-bg-surface)] shadow-[var(--shadow-sm)]">
                          {firstName[0]}{lastName[0]}
                        </div>
                        <button className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity text-white">
                          <UploadIcon className="w-6 h-6" />
                        </button>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[var(--text-sm)] font-medium text-[var(--color-text-primary)]">Profile Picture</h3>
                        <p className="text-[var(--text-xs)] text-[var(--color-text-secondary)] mt-1">
                          JPG, GIF or PNG. 1MB max.
                        </p>
                        <div className="mt-3 flex gap-3">
                          <Button size="sm" variant="secondary">Change</Button>
                          <Button size="sm" variant="ghost" className="text-[var(--color-error)] hover:text-[var(--red-600)] hover:bg-[var(--color-error-subtle)]">Remove</Button>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input 
                        label="First Name" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <Input 
                        label="Last Name" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                      />
                    </div>

                    <Input 
                      label="Email Address" 
                      type="email"
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      leftIcon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                    />

                    <div>
                      <label className="block text-[var(--text-sm)] font-medium text-[var(--color-text-primary)] mb-2">Bio</label>
                      <textarea 
                        className="block w-full rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-border-focus)] transition-colors min-h-[120px] resize-y"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        placeholder="Tell us a little about yourself..."
                      />
                      <p className="mt-1.5 text-[var(--text-xs)] text-[var(--color-text-secondary)] text-right">
                        {bio.length}/240 characters
                      </p>
                    </div>
                  </Card.Body>
                  <Card.Footer className="flex justify-end gap-3">
                    <Button variant="ghost">Cancel</Button>
                    <Button loading={loading} onClick={handleSave}>Save Changes</Button>
                  </Card.Footer>
                </Card>

                {/* Danger Zone */}
                <Card variant="outlined" className="border-[var(--color-error)]/30 overflow-hidden">
                  <div className="bg-[var(--rose-50)] dark:bg-[var(--rose-900)]/10 px-6 py-4 border-b border-[var(--color-error)]/20">
                    <h3 className="text-[var(--text-lg)] font-semibold text-[var(--color-error)] flex items-center gap-2">
                      <ShieldIcon className="w-5 h-5" /> Danger Zone
                    </h3>
                  </div>
                  <Card.Body>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div>
                        <h4 className="font-medium text-[var(--color-text-primary)]">Delete Account</h4>
                        <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)] mt-1">
                          Permanently delete your account and all of your content.
                        </p>
                      </div>
                      <Button variant="danger">Delete Account</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Stack>
            )}

            {/* Preferences Section */}
            {activeTab === 'preferences' && (
              <Stack gap={6}>
                <Card variant="outlined">
                  <Card.Header>
                    <h2 className="text-[var(--text-lg)] font-semibold text-[var(--color-text-primary)]">App Preferences</h2>
                    <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">Customize your experience.</p>
                  </Card.Header>
                  <Card.Body className="divide-y divide-[var(--color-border)]">
                    <Toggle 
                      label="Dark Mode" 
                      description="Use a dark theme for the interface."
                      checked={darkMode} 
                      onChange={setDarkMode} 
                    />
                    <Toggle 
                      label="Public Profile" 
                      description="Allow others to see your profile information."
                      checked={publicProfile} 
                      onChange={setPublicProfile} 
                    />
                    
                    <div className="py-4 flex flex-col gap-2">
                      <label className="text-[var(--text-sm)] font-medium text-[var(--color-text-primary)]">Language</label>
                      <select className="block w-full md:w-64 rounded-[var(--radius-md)] border border-[var(--color-border)] px-4 py-2.5 bg-[var(--color-bg-surface)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-border-focus)]">
                        <option>English (US)</option>
                        <option>English (UK)</option>
                        <option>Español</option>
                        <option>Français</option>
                        <option>Deutsch</option>
                      </select>
                    </div>
                  </Card.Body>
                  <Card.Footer className="flex justify-end gap-3">
                    <Button onClick={handleSave}>Save Preferences</Button>
                  </Card.Footer>
                </Card>
              </Stack>
            )}

            {/* Notifications Section */}
            {activeTab === 'notifications' && (
              <Stack gap={6}>
                 <Card variant="outlined">
                  <Card.Header>
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-[var(--text-lg)] font-semibold text-[var(--color-text-primary)]">Notifications</h2>
                        <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)]">Choose what you want to be notified about.</p>
                      </div>
                      <Badge variant="info">3 Active</Badge>
                    </div>
                  </Card.Header>
                  <Card.Body className="divide-y divide-[var(--color-border)]">
                    <div className="py-2">
                      <h3 className="text-[var(--text-sm)] font-semibold text-[var(--color-text-primary)] mb-2 uppercase tracking-wider text-[11px] text-[var(--color-text-tertiary)]">Email Notifications</h3>
                      <Toggle 
                        label="Marketing Emails" 
                        description="Receive emails about new products, features, and more."
                        checked={marketingEmails} 
                        onChange={setMarketingEmails} 
                      />
                      <Toggle 
                        label="Security Alerts" 
                        description="Receive emails about your account security."
                        checked={securityAlerts} 
                        onChange={setSecurityAlerts} 
                      />
                    </div>
                    
                    <div className="py-2">
                      <h3 className="text-[var(--text-sm)] font-semibold text-[var(--color-text-primary)] mb-2 uppercase tracking-wider text-[11px] text-[var(--color-text-tertiary)]">Push Notifications</h3>
                      <Toggle 
                        label="New Comments" 
                        description="Get notified when someone comments on your posts."
                        checked={true} 
                        onChange={() => {}} 
                      />
                       <Toggle 
                        label="Mentions" 
                        description="Get notified when someone mentions you."
                        checked={true} 
                        onChange={() => {}} 
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Stack>
            )}

          </main>
        </div>
      </Container>
    </div>
  );
}
