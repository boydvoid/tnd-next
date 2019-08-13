import React, { useState, useEffect } from "react";
import PBtn from "../Components/PBtn";
import Input from "../Components/Input";
import IconNav from "../Components/IconNav";
import NavNext from "../Components/NavNext";
import Layout from "../Components/Layout/Layout";
import Link from "next/link";
import api from "../utils/api";
function Meet(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.loadBooks().then(books => {
      console.log(books.data);
      setBooks(books.data);
    });
  }, []);
  return (
    <Layout>
      <div className="meet">
        <NavNext />
        <IconNav />
        <div className="container-fluid">
          <div className="columns is-multiline is-centered">
            <div className="column is-8">
              <h1>Teaching Experience</h1>
              <p>
                I have been a teacher for over 20 years! I taught second grade
                for about ten years and then 4th/5th for about ten years too.
                Teaching is in my blood as my mother and father were both
                teachers and my brother works as a professor of history. I look
                forward to going to work each day and am excited to be able to
                share teaching ideas and some of the things I make for my
                classroom with you.
              </p>
            </div>
            <div className="column is-8">
              <h1>My Teaching Style</h1>
              <p>
                Teaching to the whole child is important to me and while I want
                my students to do well on standardized tests, and work towards
                that end, I have never felt that tests were the most important
                thing that I teach. I believe in motivating kids to become life
                long learners, while modeling the character traits that they
                need to grow into happy, well-adjusted adults. I love to add
                humor to the learning day and try to make even the most dull
                subject come to life. I truly care about the kids I teach and
                want them to have the best year possible.
              </p>
            </div>
            <div className="column is-8">
              <h1>Honors/Awards/Shining Teacher Moment</h1>
              <p>
                I have been a teacher for over 20 years! I taught second grade
                for about ten years and then 4th/5th for about ten years too.
                Teaching is in my blood as my mother and father were both
                teachers and my brother works as a professor of history. I look
                forward to going to work each day and am excited to be able to
                share teaching ideas and some of the things I make for my
                classroom with you.
              </p>
            </div>
            <div className="column is-8">
              <h1>My Books</h1>
              {books.map(book => {
                return (
                  <Link href={book.link}>
                    <a>
                      {book.name}
                      <img src={book.img} alt="" />
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="column is-8">
              <h1>My Own Educational History</h1>
              <p>
                I have a BA in Psychology and a Master's in
                Curriculum/Instruction.
              </p>
            </div>
            <div className="column is-8">
              <h1>My Family</h1>
              <p>
                I have two kids. My son and his wife (who is like my second
                daughter) live in San Francisco. My daughter is currently in
                college. I also have a boyfriend and two rescue cats.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Meet;
