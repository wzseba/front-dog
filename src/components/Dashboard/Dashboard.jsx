import s from './Dashborad.module.css';
const Dashboard = () => {
  return (
    <div className={s.dashboardContainer}>
      {/* Barra lateral de navegación */}
      <div className={s.sidebar}>
        <div className={s.navbar}>
          <h3>Menú</h3>
        </div>
        <div className={s.navItem}>Enlace 1</div>
        <div className={s.navItem}>Enlace 2</div>
        <div className={s.navItem}>Enlace 3</div>
      </div>

      {/* Contenido principal */}
      <div className={s.mainContent}>
        <h1>Bienvenido al Dashboard</h1>
        <p>Contenido principal aquí...</p>
      </div>
    </div>
  );
};
export default Dashboard;
