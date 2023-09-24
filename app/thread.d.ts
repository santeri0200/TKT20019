type User = {
  name: string,
  picture?: Url,
};

type MetaMessage = {
  author: User,
  posted: string,
  edited?: string,
};

type Message = {
  content: string,
  meta: MetaMessage,
};

enum ThreadType {
  // ADMIN LEVEL
  ANNOUNCEMENT,
  // USER LEVEL
  CLOSED,
  DELETED,
};

type Thread = {
  id: number,
  name: string,
  
  // Threads should have at least one message (as the initial message from the thread author)
  // Otherwise it could mean that the thread was closed or deleted?
  last_message?: Message,

  // Special Thread types will be disclosed here
  type?: ThreadType,
};