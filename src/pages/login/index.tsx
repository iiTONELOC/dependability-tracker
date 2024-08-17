import React from 'react';
import {Layout, LoginForm} from '../../components';

const styles = {
  main: 'flex min-h-screen flex-col items-center justify-start',
  h1: 'text-3xl md:text-4xl font-bold  mb-2 text-center mt-16'
};

export default function Login() {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.h1}>EMPLOYEE DEPENDABILITY</h1>
        <section>
          <h2 className="text-2xl font-bold text-center my-12">Supervisor Login</h2>
          <LoginForm />
        </section>
      </main>
    </Layout>
  );
}
