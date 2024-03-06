import React from 'react'
import { images } from '../assets/data/data'
import { useParams } from 'react-router-dom';
import '../assets/styles/galeriDetay.scss'

const GaleriDetay = () => {
    const params = useParams()//pathdeki parametreyi obje olarak yakalar

    //console.log(params);
    const gID=params.galeriID;
    //console.log(gID)
    return (
      <div className='galeri-detay'>
        <img src={images[gID-1].url} alt="photo" />
        <h3>{images[gID-1].desc}</h3>
        <div className="button">
            <Link to="/online-6/galeri">Galeriye Dön </Link>
        </div>
      </div>
    );
  }
  
  export default GaleriDetay;
