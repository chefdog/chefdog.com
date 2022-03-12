import styles from './layout.module.css'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return <div className={styles.container}>{children}</div>
}
  
export default Layout