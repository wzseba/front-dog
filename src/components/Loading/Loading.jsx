import image from '../../image/dogi.gif';
import s from './Loading.module.css';

const Loading = () => {
  return (
    <div className={s.cargando}>
      <img className={s.cargando_img} src={image} alt='cargando...' />
    </div>
  );
};

export default Loading;
