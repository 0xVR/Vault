import svgPaths from "./svg-05ntm7f1ec";
import imgRectangle1 from "figma:asset/efffb604142e67826b1bfd4bc231b31dabe4f067.png";

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[55px] items-start overflow-clip relative shrink-0 w-[361px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#aeaeae] text-[16px] w-full">
        <p className="leading-[normal]">Add notes...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip pl-[15px] pr-[16px] py-[14px] right-0 rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-0" data-name="Input">
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[83px] left-[16px] right-[16px] top-[578px]" data-name="Container">
      <Input />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[14px] top-[709px]">
      <div className="absolute bg-[#98a6a4] h-[33px] left-[14px] rounded-[25px] top-[709px] w-[106px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-[67px] not-italic text-[14px] text-center text-white top-[725.5px] w-[88.147px]">
        <p className="leading-[20px]">Schedules</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[247px] top-[709px]">
      <div className="absolute bg-[#98a6a4] h-[33px] left-[247px] rounded-[25px] top-[709px] w-[120px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-[307px] not-italic text-[14px] text-center text-white top-[725.5px] w-[98px]">
        <p className="leading-[20px]">Whiteboards</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[136px] top-[709px]">
      <div className="absolute bg-[#98a6a4] h-[33px] left-[136px] rounded-[25px] top-[709px] w-[95px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-[183.5px] not-italic text-[14px] text-center text-white top-[725.5px] w-[79px]">
        <p className="leading-[20px]">Menus</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[7px] top-[756px]">
      <div className="absolute bg-[#98a6a4] h-[33px] left-[7px] rounded-[25px] top-[756px] w-[155px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-[84.5px] not-italic text-[14px] text-center text-white top-[772.5px] w-[128.895px]">
        <p className="leading-[20px]">Add new tag</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[260px] top-[857px]">
      <div className="absolute bg-[#126d62] h-[33px] left-[260px] rounded-[25px] top-[857px] w-[155px]" data-name="Rectangle" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-[337.5px] not-italic text-[14px] text-center text-white top-[873.5px] w-[128.895px]">
        <p className="leading-[20px]">Add to Vault</p>
      </div>
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="absolute bg-[#e2e8f0] inset-0" data-name="Main Content Canvas">
      <div className="absolute h-[491px] left-0 top-[67px] w-[430px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <Container />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[20px] justify-center leading-[0] left-[16px] not-italic text-[14px] text-[rgba(0,0,0,0.68)] top-[685px] w-[61px]">
        <p className="leading-[20px]">Tags</p>
      </div>
      <Group />
      <Group2 />
      <Group1 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #126D62)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative w-full">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[23px] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] text-center tracking-[-0.45px] w-[232px]">
          <p className="leading-[22.5px]">Annotate</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-end size-full" />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p1b1900c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p22be0800} id="Vector_2" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative">
        <Svg />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pb-[9px] pt-[16px] px-[16px] top-0 w-[430px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(18,109,98,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container2 />
      <Heading />
      <Container4 />
      <Button />
    </div>
  );
}

function InterpretationErrorHamza() {
  return (
    <div className="absolute bg-[#f8fafa] h-[1000px] left-0 top-0 w-[430px]" data-name="Interpretation Error - Hamza">
      <MainContentCanvas />
      <Header />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <InterpretationErrorHamza />
    </div>
  );
}