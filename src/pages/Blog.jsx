import React from 'react'
import { Container } from 'react-bootstrap';
import Neuroborreliosis from '../assets/img/Neuroborreliosis.jpg';
import Electrophysiology from '../assets/img/Electrophysiology.jpg';
import Stoneman_Syndrome from '../assets/img/Stoneman-Syndrome.jpg';
import Plasmapheresis from '../assets/img/Plasmapheresis.jpg';
import Guillian_Barre from '../assets/img/Guillian-Barre.jpg';
import headaches from '../assets/img/headaches.jpg';
import Spino_cerebellar from '../assets/img/Spino-cerebellar.jpg';
import Niemann_Pick from '../assets/img/Niemann-Pick.jpg';
import Post_stroke from '../assets/img/Post-stroke.jpg';

const Blog = () => {
  window.scrollTo(0, 0);
  return (
    <div className='blog_area'>
      <div className="subheading text-center mb-5">
        <h2><span>Blogs</span></h2>
        <div className="line m-auto"></div>
      </div>
      <Container>
        <div className="blog_wrapper">
          <div className="blog_item" id="">
            <div className="card">
              <div className="card_img">
                <img src={Neuroborreliosis} className='img-fluid' alt="" />
              </div>
              <div className="card_info">
                <h4>Neuroborreliosis in India</h4>
                <p>
                  Disease of the central nervous system caused by infection with a spirochete of the genus Borrelia especially a late stage of Lyme disease typically involving the skin, joints, and central nervous system.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="epilepsy">
            <div className="card">
              <div className="card_img">
                <img src={Electrophysiology} className='img-fluid' alt="" />
              </div>
              <div className="card_info">
                <h4>Electrophysiology of plexus</h4>
                <p>
                  In many cases, the cause of autoimmune encephalitis is unknown. But experts say it can be caused by: Exposure to certain bacteria and viruses, including streptococcus and herpes simplex virus. A type of tumor called a teratoma, generally in the ovaries,
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={Stoneman_Syndrome} alt="" />
              </div>
              <div className="card_info">
                <h4>Stoneman Syndrome</h4>
                <p>
                  Genetic disorder characterised by ectopic ossification of the skeletal and connective tissues leading to progressive fusion of axial and appendicular skeleton.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={Plasmapheresis} alt="" />
              </div>
              <div className="card_info">
                <h4>Role of Intravenous Immunoglobulin and Plasmapheresis in Neurology</h4>
                <p>
                  Intravenous immunoglobulins and plasma exchange are preferentially used to treat acute Guillain Barr� syndrome, myasthenic crisis, acute or chronic inflammatory demyelinating polyneuropathy or stiff person syndrome.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={Guillian_Barre} alt="" />
              </div>
              <div className="card_info">
                <h4>Guillian-Barre Syndrome in 2016</h4>
                <p>
                  GBS is a rare but serious post-infectious immune mediated neuropathy. It results from the autoimmune destruction of nerves in the peripheral nervous system causing symptoms such as numbness, tingling, and weakness that can progress to paralysis.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={headaches} alt="" />
              </div>
              <div className="card_info">
                <h4>Headache disorders in Women</h4>
                <p>
                  Migraine. A primary headache disorder. Migraine most often begins at puberty and most affects those aged between 35 and 45 years. It is more common in women, usually by a factor of about 2:1, because of hormonal influences.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={Spino_cerebellar} alt="" />
              </div>
              <div className="card_info">
                <h4>An Update on Spino-cerebellar</h4>
                <p>
                  Treatment is usually supportive and is based on the persons symptoms. For example, drugs may be prescribed to ease gait abnormalities. Physical therapy can strengthen muscles.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={Niemann_Pick} alt="" />
              </div>
              <div className="card_info">
                <h4>case of Niemann-Pick Type C disease</h4>
                <p>
                  Niemann-Pick type C is a rare inherited disease. The genetic mutations of this type cause cholesterol and other fats to accumulate in the liver, spleen or lungs. The brain is eventually affected too.
                </p>
              </div>
            </div>
          </div>
          <div className="blog_item" id="stroke">
            <div className="card">
              <div className="card_img">
                <img src={Post_stroke} alt="" />
              </div>
              <div className="card_info">
                <h4>Post stroke Complications</h4>
                <p>
                  Swelling of the brain after a stroke. Pneumonia causes breathing problems, a complication of many major illnesses. Pneumonia occurs as a result of not being able to move as a result of the stroke.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blog