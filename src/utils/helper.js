export const formatViews = (num) => {
    // 1 million or more → round to one decimal place and append 'M'
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + 'M';
    }
    
    // 1 thousand or more → round to zero decimal places and append 'K'
    if (num >= 1_000) {
      return Math.floor(num / 1_000) + 'K';
    }
    
    // Otherwise, just return the full number
    return num.toString();
  }



 export const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
  
    const intervals = [
      { label: 'year',   seconds: 31536000 }, // 365 days
      { label: 'month',  seconds: 2592000  }, // 30 days
      { label: 'week',   seconds: 604800   }, // 7 days
      { label: 'day',    seconds: 86400    },
      { label: 'hour',   seconds: 3600     },
      { label: 'minute', seconds: 60       },
      { label: 'second', seconds: 1        }
    ];
  
    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        return `${count} ${interval.label}${count > 1 ? 's' : ''} ago`;
      }
    }
  
    // If the date is in the future or very close to "now":
    return 'just now';
  }