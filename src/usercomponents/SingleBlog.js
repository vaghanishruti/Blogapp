import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SingleBlog = () => {
  const params = useParams();
  console.log("paramasid", params.id);

  let [SingleBlog, setsingleblog] = useState([]);

  useEffect(() => {
    axios
      .get(`https://thankful-yoke-colt.cyclic.app/singalblog/${params.id}`)
      .then((res) => {
        setsingleblog(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="blog-card">
        <div className="d-flex flex-wrap">
          <div>
            <div className="blog-first-info">
              <h1>Blog Details</h1>
              <p>
                Odio et unde deleniti. Deserunt numquam exercitationem. Officiis
                quo odio sint voluptas consequatur ut a odio voluptatem. Sit
                dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit
                quaerat ipsum dolorem.
              </p>
            </div>
            <div>
              <div className="d-flex">
                <div className="w-60">
                  <img
                    src={"https://thankful-yoke-colt.cyclic.app/images/" + SingleBlog.image}
                    width={700}
                  ></img>
                  <h1 className="blog-detail-title">{SingleBlog.title}</h1>
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                  <div className="blockquote">
                    <p>{SingleBlog.description} </p>
                  </div>
                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus
                    omnis dicta inventore tempore provident voluptas mollitia
                    aliquid. Id repellendus quia. Asperiores nihil magni dicta
                    est suscipit perspiciatis. Voluptate ex rerum assumenda
                    dolores nihil quaerat. Dolor porro tempora et quibusdam
                    voluptas. Beatae aut at ad qui tempore corrupti velit
                    quisquam rerum. Omnis dolorum exercitationem harum qui qui
                    blanditiis neque. Iusto autem itaque. Repudiandae hic quae
                    aspernatur ea neque qui. Architecto voluptatem magni. Vel
                    magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>
                  <h1 className="blog-detail-title">
                    Et quae iure vel ut odit alias.
                  </h1>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic
                    in qui quos fugit ut rerum atque. Optio provident dolores
                    atque voluptatem rem excepturi molestiae qui. Voluptatem
                    laborum omnis ullam quibusdam perspiciatis nulla nostrum.
                    Voluptatum est libero eum nesciunt aliquid qui. Quia et
                    suscipit non sequi. Maxime sed odit. Beatae nesciunt
                    nesciunt accusamus quia aut ratione aspernatur dolor. Sint
                    harum eveniet dicta exercitationem minima. Exercitationem
                    omnis asperiores natus aperiam dolor consequatur id ex sed.
                    Quibusdam rerum dolores sint consequatur quidem ea. Beatae
                    minima sunt libero soluta sapiente in rem assumenda. Et qui
                    odit voluptatem. Cum quibusdam voluptatem voluptatem
                    accusamus mollitia aut atque aut.
                  </p>
                  <img
                    src={"https://thankful-yoke-colt.cyclic.app/images/" + SingleBlog.image}
                    width={700}
                  ></img>
                  <h1 className="blog-detail-title">
                    Ut repellat blanditiis est dolore sunt dolorum quae.
                  </h1>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                    porro amet nostrum. In assumenda quia quae a id praesentium.
                    Quos deleniti libero sed occaecati aut porro autem.
                    Consectetur sed excepturi sint non placeat quia repellat
                    incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores
                    eaque aut. Explicabo omnis quibusdam esse. Ex libero illum
                    iusto totam et ut aut blanditiis. Veritatis numquam ut illum
                    ut a quam vitae.
                  </p>
                </div>

                <div className="w-40">
                  <div className="sidebar">
                    <h1 className="serach">Search</h1>
                    <div className="input">
                      <form>
                        <input></input>
                        <Button>serch</Button>
                      </form>
                    </div>
                    <h1 className="Categories">Categories</h1>
                    {/* <ul>
                          {categories.map((el) => {
                            return <li>{el.name}</li>;
                          })}
                        </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
