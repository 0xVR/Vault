import svgPaths from "./svg-dmjyon8qof";
import imgImageBlur from "figma:asset/f541a30f3d1b90c2056cbf467e70db360274ee5b.png";

function FullScreenCameraPreview() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Full-screen Camera Preview">
      <div className="blur-[1px] flex-[1_0_0] min-h-px min-w-px opacity-80 relative w-full" data-name="Image+Blur">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-63.33%] max-w-none top-0 w-[226.67%]" src={imgImageBlur} />
        </div>
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.4)] inset-0 to-[rgba(0,0,0,0.6)] via-1/2 via-[rgba(0,0,0,0)]" data-name="Vignette/Overlay for UI readability" />
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[256px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute border-l-2 border-solid border-t-2 border-white left-[2px] rounded-tl-[8px] size-[16px] top-[2px]" data-name="Border" />
      <div className="absolute border-r-2 border-solid border-t-2 border-white right-[2px] rounded-tr-[8px] size-[16px] top-[2px]" data-name="Border" />
      <div className="absolute border-b-2 border-l-2 border-solid border-white bottom-[2px] left-[2px] rounded-bl-[8px] size-[16px]" data-name="Border" />
      <div className="absolute border-b-2 border-r-2 border-solid border-white bottom-[2px] right-[2px] rounded-br-[8px] size-[16px]" data-name="Border" />
    </div>
  );
}

function CameraFocusReticleCenter() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Camera Focus Reticle (Center)">
      <Border />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[9.333px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 11.6667">
        <g id="Container">
          <rect fill="white" height="11.6667" width="9.33333" />
          <g id="Icon">
            <path d={svgPaths.p39cda280} fill="var(--fill-0, #126D62)" />
            <path d={svgPaths.p17ecef80} fill="var(--fill-0, #126D62)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[20px] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[0.35px] w-[141.34px]">
          <p className="leading-[20px]">Safe Capture Active</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-white content-stretch flex gap-[8px] items-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Container />
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[20.1px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1 20">
        <g id="Container">
          <path d={svgPaths.p3cdadd00} fill="var(--fill-0, #126D62)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[9px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" />
      <Container2 />
    </div>
  );
}

function TopHeaderOverlay() {
  return (
    <div className="bg-[#f7f5f8] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Top Header Overlay">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative w-full">
          <OverlayBorderOverlayBlur />
          <Button />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center p-[13px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="relative h-[24px] w-[24px] shrink-0">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
          <path d="M13 2L6 13h5l-1 9 8-12h-5l0-8z" fill="white" fillOpacity="0.92" />
        </svg>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Button">
      <OverlayBorderOverlayBlur1 />
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center p-[13px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex h-[24px] items-center justify-center rounded-[6px] border border-white/70 px-[4px] text-[11px] font-bold tracking-[0.08em] text-white">
        HD
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Button">
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(0,0,0,0.4)] content-stretch flex flex-col items-center p-[13px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="relative h-[24px] w-[24px] shrink-0">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 24 24">
          <path d="M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Button">
      <OverlayBorderOverlayBlur3 />
    </div>
  );
}

function FloatingQuickTools() {
  return (
    <div className="absolute bottom-[39.71%] content-stretch flex flex-col gap-[16px] items-start right-[24px] top-[39.71%]" data-name="Floating Quick Tools">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[21.118px] relative shrink-0 w-[18.75px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7499 21.1177">
        <g id="Container">
          <path d={svgPaths.p3b345300} fill="var(--fill-0, white)" fillOpacity="0.8" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function LinkLeftHomeIcon() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Link - Left: Home Icon">
      <Container4 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 size-[80px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border-6 border-[#126d62] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[6px] relative size-full">
        <div className="relative rounded-[9999px] shrink-0 size-[56px]" data-name="Border">
          <div aria-hidden="true" className="absolute border-2 border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <BackgroundBorder />
    </div>
  );
}

function CenterCaptureButton() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Center: Capture Button">
      <div className="absolute flex inset-[-4.8px] items-center justify-center">
        <div className="flex-none size-[105.6px]">
          <div className="opacity-30 relative rounded-[9999px] size-full" data-name="Blue Ring Decoration">
            <div aria-hidden="true" className="absolute border-4 border-[#126d62] border-solid inset-0 pointer-events-none rounded-[9999px]" />
          </div>
        </div>
      </div>
      <Button4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[21.25px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2499 21.2499">
        <g id="Container">
          <path d={svgPaths.p1f64400} fill="var(--fill-0, white)" fillOpacity="0.8" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(0,0,0,0.4)] relative rounded-[8px] shrink-0 size-[48px]" data-name="Overlay+Border">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function LinkRightGalleryVaultIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link - Right: Gallery/Vault Icon">
      <OverlayBorder />
      <div className="absolute bg-[#126d62] right-[-4px] rounded-[9999px] size-[12px] top-[-4px]" data-name="Notification badge for vault">
        <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center justify-between max-w-[448px] relative shrink-0 w-full" data-name="Container">
      <LinkLeftHomeIcon />
      <CenterCaptureButton />
      <LinkRightGalleryVaultIcon />
    </div>
  );
}

function BottomControls() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom Controls" style={{ backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.584) 38.462%, rgba(0, 0, 0, 0.55) 99.99%, rgba(0, 0, 0, 0) 100%)" }}>
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[32px] px-[32px] relative w-full">
        <Container3 />
      </div>
    </div>
  );
}

export default function CameraCaptureScreenEmma() {
  return (
    <div className="content-stretch flex flex-col items-start justify-between relative size-full" data-name="Camera Capture Screen- Emma" style={{ backgroundImage: "linear-gradient(90deg, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 100%), linear-gradient(90deg, rgb(247, 245, 248) 0%, rgb(247, 245, 248) 100%)" }}>
      <FullScreenCameraPreview />
      <CameraFocusReticleCenter />
      <TopHeaderOverlay />
      <FloatingQuickTools />
      <BottomControls />
    </div>
  );
}
