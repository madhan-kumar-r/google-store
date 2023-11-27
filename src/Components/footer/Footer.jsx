import './Footer.scss'
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <TwitterIcon fontSize="small" style={{ fill: "#423f3f" }} />
        <InstagramIcon fontSize="small" style={{ fill: "#423f3f" }} />
        <FacebookIcon fontSize="small" style={{ fill: "#423f3f" }} />
        <YouTubeIcon fontSize="small" style={{ fill: "#423f3f" }} />
      </div>
      <div className="right">
        <span>Privacy</span>
        <span>Google Nest Commitment to Privacy</span>
        <span>Sales Terms</span>
        <span>Terms of Service</span>
        <span>Careers</span>
      </div>
    </div>
  );
};

export default Footer;
