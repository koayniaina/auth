import styles from '@/styles/Auth.module.css';
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.auth}>
        {children}
    </div>
  );
}