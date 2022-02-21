import React from "react";
import "./HomeComponent.css";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import BlockIcon from "@mui/icons-material/Block";
import NextPlanOutlinedIcon from "@mui/icons-material/NextPlanOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import App2 from "../Components/RichTextEditor";

function HomeComponent() {
  return (
    <>
      <hr />
      <div className="Homeclass">
        <div className="Navplane">
          <center>
            <div className="Heading">Home page</div>
          </center>
          <div className="home_row">
            <div className="home_column onebyhundred">
              <label htmlFor="">Order: 34354634</label>
              <br />
              <label htmlFor="">Order Discription</label>
              <br />
              <label htmlFor="">Created By:</label>
              <br />
              <label htmlFor="">Sent By:</label>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor="">Arnab Chakrborty</label>
              <br />
              <label htmlFor="">Ramesh Singh</label>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor="">Check Data and update Document</label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor="">Due Date: 12/12/2022</label>
              <br />
              <label htmlFor="">Sent to: D.Das, A.sen</label>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <button type="submit">
                <label htmlFor="">
                  Files <FileCopyIcon sx={{ fontSize: 14 }}  />
                </label>
              </button>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <button type="submit">
                {" "}
                <label htmlFor="">
                  Forward <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                </label>
              </button>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <button type="submit">
                {" "}
                <label htmlFor="">
                  Send Back <ArrowBackIosIcon sx={{ fontSize: 14 }} />
                </label>
              </button>
            </div>
            <div className="home_column onebyhundred">
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <label htmlFor=""></label>
              <br />
              <button type="submit">
                {" "}
                <label htmlFor="">
                  Reject <BlockIcon sx={{ fontSize: 14 }} />
                </label>
              </button>
            </div>
            <div className="home_column onebyhundred">
              <button type="submit">
                {" "}
                <label htmlFor="">
                  Logout <LogoutIcon sx={{ fontSize: 14 }} />
                </label>
              </button>
              <br />
              <button type="submit">
                {" "}
                <label htmlFor="">
                  Settings <SettingsIcon sx={{ fontSize: 14 }} />
                </label>
              </button>
              <br />
              <label htmlFor=""></label>
              <br />
              <button type="submit">
                {" "}
                <label htmlFor="">
                  Next Assessor <NextPlanOutlinedIcon sx={{ fontSize: 14 }} />
                </label>
              </button>
            </div>
          </div>
        </div>
        <div className="Doc_viewer"></div>
        <App2 />
      </div>
    </>
  );
}

export default HomeComponent;
