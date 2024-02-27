import React, { ChangeEvent } from "react";
import ArticleCard from "../../components/ArticleCard";
import Navbar from "../../components/Navbar"
import DummyArticle from "../../mocks/article.json";
import IArticle from "../../interface/Artilcle";
import Footer from "../../components/Footer";

const Home: React.FC = () => {
  const [article, setArticle] = React.useState<IArticle[]>(DummyArticle)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {

  }

  return (
    <>
      <Navbar />

      {article.map((data: IArticle, index: number) => {
        return (
          <div key={index} className="mt-4">
            <ArticleCard 
              author={data.author}
              image={data.image}
              title={data.title}
            />
          </div>
        )
      })}

      <Footer />
    </>
  )
}

export default Home;

// state vs props