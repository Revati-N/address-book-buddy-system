
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Contact } from '../types/Contact';
import ContactCard from './ContactCard';
import { List } from 'lucide-react';

interface ContactListProps {
  contacts: Contact[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onDeleteContact: (id: string) => void;
}

const ContactList = ({ contacts, searchTerm, onSearchChange, onDeleteContact }: ContactListProps) => {
  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-6">
        <CardTitle className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <List className="h-6 w-6 text-blue-600" />
          Contacts ({contacts.length})
        </CardTitle>
        <div className="mt-4">
          <Input
            type="text"
            placeholder="Search contacts by name, email, or company..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </CardHeader>
      <CardContent>
        {contacts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <List className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {searchTerm ? 'No contacts found' : 'No contacts yet'}
            </h3>
            <p className="text-gray-500">
              {searchTerm 
                ? 'Try adjusting your search terms'
                : 'Add your first contact using the form on the left'
              }
            </p>
          </div>
        ) : (
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {contacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onDelete={onDeleteContact}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContactList;
