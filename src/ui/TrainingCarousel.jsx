import { styled, useTheme } from "@mui/material";

const StyledImg = styled("img")`
  height: 100%;
`;

function TrainingCarousel({ images }) {
  const theme = useTheme();
  return (
    <swiper-container
      free-mode={JSON.stringify({
        enabled: true,
        sticky: true,
      })}
      slides-per-view="auto"
      space-between="5"
      loop="true"
      autoplay-delay="5000"
      pagination-dynamic-bullets="true"
      style={{
        height: "30rem",
        "--swiper-pagination-color": `${theme.palette.primary.main}`,
      }}
    >
      {images.map((img) => (
        <swiper-slide key={img} style={{ height: "100%", width: "auto" }}>
          <StyledImg src={img} alt="Training" />
        </swiper-slide>
      ))}
    </swiper-container>
  );
}

export default TrainingCarousel;
