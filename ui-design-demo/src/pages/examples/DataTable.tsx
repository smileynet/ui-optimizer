import { useState } from 'react';
import { Container } from '../../components/ui/Container';
import { Stack } from '../../components/ui/Stack';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import { cn } from '../../lib/utils';

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  );
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}



function SortIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
    </svg>
  );
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'pending' | 'inactive';
  lastActive: string;
}

const MOCK_DATA: User[] = [
  { id: 'USR-001', name: 'Olivia Rhye', email: 'olivia@untitledui.com', role: 'Product Designer', status: 'active', lastActive: 'Jan 4, 2024' },
  { id: 'USR-002', name: 'Phoenix Baker', email: 'phoenix@untitledui.com', role: 'Product Manager', status: 'active', lastActive: 'Jan 4, 2024' },
  { id: 'USR-003', name: 'Lana Steiner', email: 'lana@untitledui.com', role: 'Frontend Developer', status: 'active', lastActive: 'Jan 2, 2024' },
  { id: 'USR-004', name: 'Demi Wilkinson', email: 'demi@untitledui.com', role: 'Backend Developer', status: 'active', lastActive: 'Jan 6, 2024' },
  { id: 'USR-005', name: 'Candice Wu', email: 'candice@untitledui.com', role: 'Full Stack Developer', status: 'pending', lastActive: 'Jan 8, 2024' },
  { id: 'USR-006', name: 'Natali Craig', email: 'natali@untitledui.com', role: 'UX Designer', status: 'active', lastActive: 'Jan 6, 2024' },
  { id: 'USR-007', name: 'Drew Cano', email: 'drew@untitledui.com', role: 'UX Copywriter', status: 'inactive', lastActive: 'Dec 30, 2023' },
  { id: 'USR-008', name: 'Orlando Diggs', email: 'orlando@untitledui.com', role: 'Customer Success', status: 'active', lastActive: 'Jan 2, 2024' },
  { id: 'USR-009', name: 'Andi Lane', email: 'andi@untitledui.com', role: 'Product Manager', status: 'pending', lastActive: 'Jan 9, 2024' },
  { id: 'USR-010', name: 'Kate Morrison', email: 'kate@untitledui.com', role: 'QA Engineer', status: 'active', lastActive: 'Jan 5, 2024' },
];

export function DataTable() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [data, _setData] = useState<User[]>(MOCK_DATA);
  void _setData;
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelectAll = () => {
    if (selectedItems.size === data.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(data.map((user) => user.id)));
    }
  };

  const toggleSelectItem = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const isAllSelected = data.length > 0 && selectedItems.size === data.length;
  const isIndeterminate = selectedItems.size > 0 && selectedItems.size < data.length;

  return (
    <div className="min-h-screen bg-[var(--color-bg-page)] py-12 font-sans text-[var(--color-text-primary)]">
      <Container size="xl">
        <Stack gap={8}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Stack gap={1}>
              <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                Team Members
              </h1>
              <p className="text-[var(--color-text-secondary)] text-base">
                Manage your team members and their account permissions here.
              </p>
            </Stack>
            <div className="flex gap-3">
               <Button variant="secondary" leftIcon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>}>
                Export
              </Button>
              <Button leftIcon={<PlusIcon className="w-5 h-5" />}>
                Add Member
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-sm)]">
            <div className="p-4 border-b border-[var(--color-border)] bg-[var(--color-bg-surface)]">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                
                <div className="flex flex-1 gap-3 flex-col sm:flex-row">
                  <div className="w-full sm:w-80">
                    <Input 
                      placeholder="Search users..." 
                      leftIcon={<SearchIcon className="w-5 h-5" />}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative min-w-[160px]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[var(--color-text-tertiary)]">
                        <FilterIcon className="w-4 h-4" />
                    </div>
                    <select 
                      className={cn(
                        "appearance-none w-full rounded-[var(--radius-md)] border px-4 py-2.5 pl-9 pr-10",
                        "bg-[var(--color-bg-surface)] text-[var(--color-text-primary)]",
                        "border-[var(--color-border)] focus:border-[var(--color-border-focus)]",
                        "focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20",
                        "transition-colors duration-150 text-sm"
                      )}
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                    >
                      <option value="all">All Status</option>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[var(--color-text-tertiary)]">
                      <ChevronDownIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <button className={cn(
                     "inline-flex items-center gap-2 px-3 py-2.5 rounded-[var(--radius-md)] border text-sm font-medium",
                     "bg-[var(--color-bg-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)]",
                     "hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                  )}>
                    <CalendarIcon className="w-4 h-4" />
                    <span>Last 30 days</span>
                  </button>
                </div>

                {selectedItems.size > 0 && (
                  <div className="flex items-center gap-2 animate-in fade-in slide-in-from-right-4 duration-200">
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                      {selectedItems.size} selected
                    </span>
                    <Button size="sm" variant="danger" leftIcon={<TrashIcon className="w-4 h-4" />}>
                      Delete
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[var(--color-bg-subtle)] border-b border-[var(--color-border)]">
                    <th className="py-3 pl-6 pr-3 w-12">
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-[var(--color-border-strong)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]/40 cursor-pointer"
                          checked={isAllSelected}
                          ref={input => {
                            if (input) input.indeterminate = isIndeterminate;
                          }}
                          onChange={toggleSelectAll}
                        />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer group hover:text-[var(--color-text-primary)]">
                      <div className="flex items-center gap-1">
                        User Info
                        <SortIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer group hover:text-[var(--color-text-primary)]">
                       <div className="flex items-center gap-1">
                        Status
                         <SortIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer group hover:text-[var(--color-text-primary)]">
                       <div className="flex items-center gap-1">
                        Role
                         <SortIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer group hover:text-[var(--color-text-primary)]">
                      Email Address
                    </th>
                     <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] cursor-pointer group hover:text-[var(--color-text-primary)]">
                       <div className="flex items-center gap-1">
                        Last Active
                         <SortIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </th>
                    <th className="py-3 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-text-secondary)] text-right pr-6">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--color-border)] bg-[var(--color-bg-surface)]">
                  {data.map((user) => (
                    <tr 
                      key={user.id} 
                      className={cn(
                        "group transition-colors hover:bg-[var(--color-bg-subtle)] even:bg-[var(--color-bg-page)]/50",
                        selectedItems.has(user.id) && "bg-[var(--color-primary-subtle)] hover:bg-[var(--color-primary-subtle)]"
                      )}
                    >
                      <td className="py-4 pl-6 pr-3">
                         <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded border-[var(--color-border-strong)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]/40 cursor-pointer"
                            checked={selectedItems.has(user.id)}
                            onChange={() => toggleSelectItem(user.id)}
                          />
                        </div>
                      </td>
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-[var(--color-primary-subtle)] flex items-center justify-center text-[var(--color-primary)] font-bold text-sm ring-2 ring-[var(--color-bg-surface)]">
                            {user.name.charAt(0)}{user.name.split(' ')[1]?.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-[var(--color-text-primary)]">{user.name}</span>
                            <span className="text-xs text-[var(--color-text-tertiary)] font-mono">{user.id}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-3">
                        <Badge 
                          variant={
                            user.status === 'active' ? 'success' :
                            user.status === 'inactive' ? 'default' : 'warning'
                          }
                          size="md"
                        >
                          <span className="capitalize">{user.status}</span>
                        </Badge>
                      </td>
                      <td className="py-4 px-3">
                         <span className="text-sm text-[var(--color-text-secondary)]">{user.role}</span>
                      </td>
                       <td className="py-4 px-3">
                         <span className="text-sm text-[var(--color-text-secondary)]">{user.email}</span>
                      </td>
                      <td className="py-4 px-3">
                        <span className="text-sm text-[var(--color-text-secondary)]">{user.lastActive}</span>
                      </td>
                      <td className="py-4 pl-3 pr-6 text-right">
                         <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
                           <button className="p-1.5 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary-subtle)] transition-colors">
                              <EditIcon className="w-4 h-4" />
                           </button>
                            <button className="p-1.5 rounded-md text-[var(--color-text-secondary)] hover:text-[var(--color-error)] hover:bg-[var(--color-error-subtle)] transition-colors">
                              <TrashIcon className="w-4 h-4" />
                           </button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-[var(--color-border)] bg-[var(--color-bg-surface)] flex items-center justify-between">
              <div className="hidden sm:flex text-sm text-[var(--color-text-secondary)]">
                Showing <span className="font-medium text-[var(--color-text-primary)] mx-1">1</span> to <span className="font-medium text-[var(--color-text-primary)] mx-1">10</span> of <span className="font-medium text-[var(--color-text-primary)] mx-1">100</span> results
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                <Button variant="secondary" size="sm" leftIcon={<ChevronLeftIcon className="w-4 h-4" />}>
                  Previous
                </Button>
                
                <div className="hidden sm:flex items-center gap-1">
                  {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
                     typeof page === 'number' ? (
                       <button 
                        key={i}
                        className={cn(
                          "w-8 h-8 flex items-center justify-center rounded-[var(--radius-md)] text-sm font-medium transition-colors",
                          page === 1 
                            ? "bg-[var(--color-bg-subtle)] text-[var(--color-text-primary)]" 
                            : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-subtle)] hover:text-[var(--color-text-primary)]"
                        )}
                      >
                        {page}
                      </button>
                     ) : (
                       <span key={i} className="px-1 text-[var(--color-text-tertiary)]">...</span>
                     )
                  ))}
                </div>

                <Button variant="secondary" size="sm" rightIcon={<ChevronRightIcon className="w-4 h-4" />}>
                  Next
                </Button>
              </div>
            </div>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
