export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getStatusColor(status) {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 border border-green-200';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
    case 'Closed':
      return 'bg-gray-100 text-gray-800 border border-gray-200';
    default:
      return 'bg-blue-100 text-blue-800 border border-blue-200';
  }
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}