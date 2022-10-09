import { styled } from "@stitches/config";

type EmbedMapProps = {
  lat: number;
  lng: number;
};

export default function EmbedMap({
  lat,
  lng
}: EmbedMapProps) {
  return (
    <StyledMapWrapper>
      <StyledEmbedMap
        dangerouslySetInnerHTML={{ 
          __html: `<div class="mapouter">
          <div class="gmap_canvas"><iframe style="width: 100%;height: 240px" id="gmap_canvas" src="https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${lat},${lng}&zoom=16" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://coderdiaz.dev"></a><br><style>.mapouter{position:relative;text-align:right;height: 240px;width:100%;}</style><style>.gmap_canvas {overflow:hidden;background:none!important;height: 240px;width:100%;}.place-card{display: none;}</style></div></div>`
        }} />
    </StyledMapWrapper>
  );
}

const StyledMapWrapper = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  background: '$slate50',
  minHeight: 240,
});

const StyledEmbedMap = styled('div', {
  position: 'relative',
  borderRadius: 12,
  overflow: 'hidden',
});