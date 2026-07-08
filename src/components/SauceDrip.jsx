/* Red schezwan-sauce drip divider — sits at the top of a section and drips down. */
const D =
  'M0,0 H1200 V60 ' +
  'C1160,60 1170,150 1130,150 C1095,150 1100,60 1060,60 ' +
  'C1010,60 1015,112 985,112 C955,112 960,60 915,60 ' +
  'C860,60 872,178 825,178 C785,178 795,60 745,60 ' +
  'C700,60 706,122 675,122 C645,122 650,60 610,60 ' +
  'C560,60 572,152 525,152 C488,152 495,60 450,60 ' +
  'C405,60 412,106 380,106 C350,106 355,60 315,60 ' +
  'C260,60 272,168 225,168 C188,168 195,60 150,60 ' +
  'C110,60 116,120 85,120 C55,120 60,60 0,60 Z'

export default function SauceDrip({ color = '#d0281c' }) {
  return (
    <div className="sauce-drip" aria-hidden="true">
      <svg viewBox="0 0 1200 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sd" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e2483a" />
            <stop offset="1" stopColor={color} />
          </linearGradient>
        </defs>
        <path className="sd-path" d={D} fill="url(#sd)" />
        <circle className="sd-drop" cx="828" cy="188" r="7" fill={color} />
        <circle className="sd-drop" cx="228" cy="180" r="6" fill={color} />
        <circle className="sd-drop" cx="527" cy="166" r="5" fill={color} />
      </svg>
    </div>
  )
}
