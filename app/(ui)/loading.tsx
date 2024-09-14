import styles from './loading.module.css'

export default function Loading() {
  // https://uiverse.io/andrew-demchenk0/silent-earwig-10
  return (
    <div className="loader p-24 flex justify-center">
      <div data-glitch="Loading..." className={styles.glitch}>
        Loading...
      </div>
    </div>
  )
}
