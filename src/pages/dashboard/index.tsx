import React from 'react';
import {Request} from 'express';
import type {InferGetServerSidePropsType} from 'next';
import {DashboardStats} from '../../components/DashboardStats';
import {DivisionLayout, DashboardLinks} from '../../components';
import {getTokenForServerSideProps, JwtPayload, ClientSidePayload, Redirect} from '../../auth';

const styles = {
  userGreetings: 'text-2xl font-bold text-center my-12',
  h1: 'text-3xl md:text-4xl font-bold  mb-2 text-center mt-16',
  main: 'flex h-full w-full flex-col items-center justify-start',
  section: 'w-full min-h-[75vh] flex flex-col justify-start items-center'
};

function SupervisorMain({
  children,
  user
}: Readonly<{children: React.ReactNode; user: ClientSidePayload}>) {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Dependability Tracker</h1>
      <section className={styles.section}>
        <h2 className={styles.userGreetings}>Welcome back, {user?.username ?? 'Guest'}</h2>
        {children}
      </section>
    </main>
  );
}

export default function SupervisorLandingPage(
  props: Readonly<InferGetServerSidePropsType<typeof getServerSideProps>>
) {
  return (
    <DivisionLayout isAdmin={props?.user?.isAdmin ?? false}>
      <SupervisorMain user={props.user}>
        <DashboardLinks />
        <div className="w-full h-auto flex flex-col items-center justify-start p-5 mt-12 rounded-md">
          <DashboardStats />
        </div>
      </SupervisorMain>
    </DivisionLayout>
  );
}

export const getServerSideProps = async (request: {req: Request}) => {
  const token: JwtPayload | Redirect | undefined = await getTokenForServerSideProps(request);

  const isAdmin = token && 'isAdmin' in token ? token.isAdmin : false;
  const username = token && 'username' in token ? token.username : '';

  const clientProps: ClientSidePayload = {
    isAdmin,
    username
  };

  return {
    props: {
      user: {...clientProps}
    }
  };
};
