import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";
import _ from "lodash";

export const texts: string[] = [
    "lorem",
    "Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sequi tenetur veniam!",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae blanditiis consequatur distinctio neque optio reprehenderit.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam consectetur corporis dolores eaque error, expedita ipsa iste laudantium, magni nobis quis sed sequi sint?",
    "लोरेम इप्सम",
    "ת 🍋 סד דו אייוסמוד 🐪",
    "أميت 🕌 كونسكتيتور أديبيسكينج إيليت 🌙 سيد دو إيوسمود ☕️",
    "ロレム・イプサム・ドロル・シット・アメット 🍣 コンセクテトゥル 🗻 アディピシシング・エリット 🎌 苏姆 多洛",
    "Λορεμ ιπσθμ δολορ σιτ αμετ 🏛 κονσεκτετθερ αδιπισκινγ ελιτ 🫒 σεδ δο 🐙 Лорем ипсум долор сит амет 🪆 консектетур адиписцинг елит 🐻 ",
    "Лорем ипсум ديمو 🌍 मिश्रित script 混合 テスト 🧪 αδιπισκινγ ελιτ σεδ δο ✨ ลอเรม อิปซัม โดลอร์ ซิท อาเมท 🐘 คอนเซคเทเทอร์ 🍜 อาดิพิสซิ่ง เอลิท 🏮 埃利特 塞德 多 🥢普苏姆 多洛尔 坐 阿梅特 🐉",
];

export const images: string[] = [
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/city.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/markrutte.jpeg",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/chicken.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/lightning.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/battlefield.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/hamster.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/siege.jpg",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/ubisoft.jpg",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/applestore.jpg",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/linus.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/cat.png",
    "https://jstmemit.com/cdn-cgi/image/f=webp,fit=scale-down,metadata=none,sharpen=1,onerror=redirect,q=10,width=325/https://files.wideunits.nl/memes/examples/rust.jpg",
];

export const variants: Omit<TemplateProps, "font">[] = [];

for (let i: number = 0; i < texts.length; i++) {
    variants.push({
        texts: _.times(5, (): string => texts[i]),
        images: _.drop(_.shuffle(images), 5),
    });
}
