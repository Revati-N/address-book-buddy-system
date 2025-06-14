
import { Button } from '@/components/ui/button';
import { Contact } from '../types/Contact';
import { Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactCardProps {
  contact: Contact;
  onDelete: (id: string) => void;
}

const ContactCard = ({ contact, onDelete }: ContactCardProps) => {
  const { toast } = useToast();

  const handleDelete = () => {
    onDelete(contact.id);
    toast({
      title: "Contact Deleted",
      description: `${contact.name} has been removed from your contacts.`,
    });
  };

  return (
    <div className="bg-gradient-to-r from-white to-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 truncate">
                {contact.name}
              </h3>
              {contact.company && (
                <p className="text-sm text-gray-500 truncate">
                  {contact.company}
                </p>
              )}
            </div>
          </div>
          
          <div className="space-y-1 text-sm">
            <p className="text-gray-600 truncate">
              📧 {contact.email}
            </p>
            {contact.phone && (
              <p className="text-gray-600 truncate">
                📞 {contact.phone}
              </p>
            )}
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;
