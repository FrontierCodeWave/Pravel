import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { Lucia } from 'lucia';
import { cookies } from 'next/headers';

import { User } from '@/types/auth.type';

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === 'production',
    },
  },
});

export const createAuthSession = async (user: User, token: string) => {
  const session = await lucia.createSession(user.email, {
    token,
    user,
  });
  const sessionCookie = lucia.createSessionCookie(session.id);

  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
};

declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia;
  }
}

export default lucia;
