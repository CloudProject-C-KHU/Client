"use client";
import Nav from "@/view/nav";
import "../../styles/home.css";
import TextEdit from "@/component/textEdit";
export default function home() {
  return (
    <main className="main">
      <div>
        <Nav />
      </div>
      <div className="home">
        <div className="home-wrap">
          <h1> main page & chat list</h1>
          <div>
            <div>
              <div>
                <div>
                  <TextEdit />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
