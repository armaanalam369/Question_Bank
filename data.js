/* =====================================================================
   WISE CHOICE – QUESTION BANK  (data.js)
   ---------------------------------------------------------------------
   HOW TO ADD QUESTIONS (no coding knowledge needed):

   1. Find the block (section) that matches your topic, e.g. "Lakes".
   2. Go to the LAST question line of that block (just before the ]);)
   3. Copy one line, paste it below, and change the text. Each line is:

      ["Question?", ["Option A", "Option B", "Option C", "Option D"], 1, "Explanation"],

      - The number after the options is the CORRECT answer:
        0 = first option, 1 = second, 2 = third, 3 = fourth.
      - Keep every comma, quote mark " and bracket [ ] exactly as shown.
      - Always add NEW questions at the END of a block (keeps IDs stable).

   HOW TO ADD A NEW TOPIC / SUB-TOPIC:
   Copy a whole block (from addSection( to  ]);  ) to the bottom of the file
   (before the last line) and change: code, subject, category, subtopic.
   - code      : a short unique label, e.g. "GEO-LAK" (used to create IDs)
   - subject   : top level, e.g. "General Studies"
   - category  : e.g. "Geography"
   - subtopic  : e.g. "Lakes"
   The app picks the new topic up automatically – nothing else to edit.
   ===================================================================== */

window.QUESTION_BANK = [];

(function () {
  var counters = {};
  // Turns the short lines below into full question objects:
  // { id, subject, category, subtopic, question, options, correctIndex, explanation, yearOrSource }
  window.addSection = function (info, rows) {
    rows.forEach(function (r) {
      counters[info.code] = (counters[info.code] || 0) + 1;
      var n = String(counters[info.code]);
      while (n.length < 3) n = "0" + n;
      window.QUESTION_BANK.push({
        id: info.code + "-" + n,
        subject: info.subject,
        category: info.category,
        subtopic: info.subtopic,
        question: r[0],
        options: r[1],
        correctIndex: r[2],
        explanation: r[3] || "",
        yearOrSource: r[4] || info.source || ""
      });
    });
  };
})();

var SRC = "MCQ GS Notes – Career Support";
var GS = "General Studies";

/* ============================ GEOGRAPHY ============================ */

addSection({ code: "GEO-LAK", subject: GS, category: "Geography", subtopic: "Lakes", source: SRC }, [
  ["Loktak Lake is located in:", ["Manipur", "Nagaland", "Mizoram", "Arunachal Pradesh"], 0, "Loktak is the largest freshwater lake in Northeast India, famous for its phumdis (floating islands). Keibul Lamjao, the world's only floating national park, is located on it."],
  ["Chilika Lake is located in:", ["West Bengal", "Odisha", "Andhra Pradesh", "Tamil Nadu"], 1, "Chilika is a large brackish-water lagoon on India's east coast and an important wintering ground for migratory birds."],
  ["Wular Lake is located in:", ["Himachal Pradesh", "Uttarakhand", "Jammu and Kashmir", "Ladakh"], 2, "Wular is one of the largest freshwater lakes in Asia and is associated with the Jhelum River."],
  ["Which is the largest freshwater lake in India?", ["Dal Lake", "Wular Lake", "Loktak Lake", "Sambhar Lake"], 1, "Wular Lake, in Jammu and Kashmir, is generally regarded as India's largest freshwater lake."],
  ["Sambhar Lake is famous for:", ["Freshwater fishing", "Salt production", "Petroleum production", "Tea cultivation"], 1, "Sambhar Lake in Rajasthan is India's largest inland saltwater lake and an important source of salt."],
  ["Pulicat Lake lies between:", ["Odisha and West Bengal", "Andhra Pradesh and Tamil Nadu", "Kerala and Karnataka", "Gujarat and Maharashtra"], 1, "Pulicat is a large brackish-water lagoon on the Coromandel Coast."],
  ["Vembanad Lake is located in:", ["Kerala", "Karnataka", "Tamil Nadu", "Goa"], 0, "Vembanad is the longest lake in India and the largest in Kerala. The Nehru Trophy Boat Race is held on its waters."],
  ["Which lake is famous for floating gardens?", ["Dal Lake", "Loktak Lake", "Sambhar Lake", "Kolleru Lake"], 1, "Loktak is famous for phumdis – floating masses of vegetation, soil and organic matter."],
  ["Kolleru Lake is located in:", ["Andhra Pradesh", "Telangana", "Odisha", "Karnataka"], 0, "Kolleru is a freshwater lake between the Krishna and Godavari river deltas."]
]);

addSection({ code: "GEO-RIV", subject: GS, category: "Geography", subtopic: "Rivers", source: SRC }, [
  ["Which river is known as the 'Sorrow of Bihar'?", ["Ganga", "Kosi", "Son", "Gandak"], 1, "The Kosi is called the 'Sorrow of Bihar' because of its frequent and destructive floods."],
  ["Which river is known as the 'Sorrow of Bengal'?", ["Damodar", "Hooghly", "Teesta", "Mahananda"], 0, "The Damodar was historically known as the 'Sorrow of Bengal' because of its devastating floods."],
  ["The Brahmaputra is known as ______ in Tibet.", ["Sutlej", "Tsangpo", "Lohit", "Dihang"], 1, "In Tibet the Brahmaputra is known as the Yarlung Tsangpo or Tsangpo."],
  ["The Ganga-Brahmaputra Delta is also known as:", ["Konkan", "Sundarbans", "Malwa", "Coromandel"], 1, "The Sundarbans form the world's largest mangrove forest and deltaic region, shared by India and Bangladesh."],
  ["Which is the longest river of Peninsular India?", ["Krishna", "Godavari", "Narmada", "Mahanadi"], 1, "The Godavari is the longest river of Peninsular India and is often called the 'Dakshin Ganga'."],
  ["The Narmada River drains into:", ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Gulf of Mannar"], 1, "The Narmada flows westward through a rift valley and drains into the Arabian Sea."],
  ["Which river flows through a rift valley?", ["Ganga", "Yamuna", "Narmada", "Brahmaputra"], 2, "The Narmada flows through a structural rift valley between the Vindhya and Satpura ranges."],
  ["Which of the following rivers forms an estuary rather than a delta?", ["Godavari", "Krishna", "Narmada", "Mahanadi"], 2, "Narmada and Tapi are major west-flowing rivers that form estuaries before entering the Arabian Sea."],
  ["The Tapi River originates in:", ["Satpura Range", "Aravalli Range", "Western Ghats", "Himalayas"], 0, "The Tapi (Tapti) originates near Multai in Madhya Pradesh and flows westward into the Arabian Sea."],
  ["Which river is called the 'Dakshin Ganga'?", ["Krishna", "Kaveri", "Godavari", "Mahanadi"], 2, "Because of its length, drainage basin and importance, the Godavari is popularly called the Dakshin Ganga."],
  ["The source of the Ganga is traditionally associated with:", ["Yamunotri", "Gangotri Glacier", "Siachen Glacier", "Zemu Glacier"], 1, "The Bhagirathi, a main headstream of the Ganga, originates from the Gangotri Glacier at Gaumukh."],
  ["The Yamuna originates from:", ["Gangotri Glacier", "Yamunotri Glacier", "Zemu Glacier", "Milam Glacier"], 1, "The Yamuna rises from the Yamunotri Glacier in Uttarakhand."],
  ["Which river is the major tributary of the Yamuna?", ["Chambal", "Kosi", "Teesta", "Damodar"], 0, "The Chambal is one of the major tributaries of the Yamuna. Others include Betwa and Ken."],
  ["The Mahanadi originates in:", ["Maharashtra", "Chhattisgarh", "Odisha", "Madhya Pradesh"], 1, "The Mahanadi rises in the Sihawa region of Chhattisgarh and flows through Chhattisgarh and Odisha."],
  ["Which of the following is a west-flowing river?", ["Mahanadi", "Godavari", "Krishna", "Tapi"], 3, "The Tapi (Tapti) flows westward into the Arabian Sea. Narmada is another major west-flowing peninsular river."]
]);

addSection({ code: "GEO-DAM", subject: GS, category: "Geography", subtopic: "Dams & Projects", source: SRC }, [
  ["Hirakud Dam is built across the:", ["Godavari", "Mahanadi", "Krishna", "Narmada"], 1, "Hirakud Dam is built across the Mahanadi near Sambalpur in Odisha."],
  ["Tehri Dam is built on the:", ["Alaknanda", "Bhagirathi", "Yamuna", "Mandakini"], 1, "Tehri Dam is located on the Bhagirathi River in Uttarakhand."],
  ["Sardar Sarovar Dam is built on the:", ["Tapi", "Narmada", "Godavari", "Sabarmati"], 1, "Sardar Sarovar is a major multipurpose project on the Narmada River in Gujarat."]
]);

addSection({ code: "GEO-MTN", subject: GS, category: "Geography", subtopic: "Mountains & Ranges", source: SRC }, [
  ["The highest peak in India is:", ["Nanda Devi", "Kangchenjunga", "Kamet", "Anamudi"], 1, "Kangchenjunga (8,586 m) is the highest peak in India and the third-highest in the world."],
  ["Anamudi is the highest peak of:", ["Eastern Ghats", "Western Ghats", "Aravalli Range", "Nilgiri Hills"], 1, "Anamudi, in Kerala, is the highest peak of the Western Ghats and South India."],
  ["Which is the oldest mountain range in India?", ["Himalayas", "Aravalli Range", "Western Ghats", "Eastern Ghats"], 1, "The Aravalli Range is one of the oldest fold mountain systems in the world."],
  ["The Western Ghats and Eastern Ghats meet at:", ["Nilgiri Hills", "Khasi Hills", "Cardamom Hills", "Aravalli Hills"], 0, "The Western and Eastern Ghats converge in the Nilgiri Hills of southern India."],
  ["Highest part of the Southern Plateau in India is:", ["Anaimudi", "Tibetan Plateau", "Satpura", "Eastern Ghats"], 0, "Anaimudi, in Kerala, is the highest peak of the Western Ghats and South India."],
  ["The highest peak of the Nilgiri Hills is:", ["Anaimudi", "Doddabetta", "Mahendragiri", "Kalsubai"], 1, "Doddabetta is the highest peak of the Nilgiris, near Ooty in Tamil Nadu."],
  ["The highest peak of the Aravalli Range is:", ["Guru Shikhar", "Dhupgarh", "Anaimudi", "Parasnath"], 0, "Guru Shikhar, near Mount Abu in Rajasthan, is the highest point of the Aravalli Range."],
  ["The highest peak of the Satpura Range is:", ["Mahendragiri", "Guru Shikhar", "Dhupgarh", "Doddabetta"], 2, "Dhupgarh, near Pachmarhi in Madhya Pradesh, is the highest peak of the Satpura Range."],
  ["The highest peak of the Eastern Ghats is:", ["Arma Konda", "Anaimudi", "Doddabetta", "Kalsubai"], 0, "Arma Konda (Jindhagada Peak) in Andhra Pradesh is generally regarded as the highest point of the Eastern Ghats."],
  ["The Western Ghats are also known as:", ["Sahyadri", "Himadri", "Nilgiri", "Purvanchal"], 0, "The Western Ghats are commonly known as the Sahyadri ranges."],
  ["Which of the following is a characteristic feature of the Western Ghats?", ["They are discontinuous", "They are lower than Eastern Ghats everywhere", "They form a nearly continuous mountain chain", "They lie east of the Deccan Plateau"], 2, "The Western Ghats form an almost continuous escarpment along the western margin of the Deccan Plateau."],
  ["The Eastern Ghats are discontinuous mainly because they are cut by:", ["Glaciers", "Rivers", "Deserts", "Volcanoes"], 1, "Major rivers such as the Mahanadi, Godavari, Krishna and Kaveri cut through the Eastern Ghats."],
  ["The Palghat Gap lies between:", ["Nilgiri and Anaimalai Hills", "Satpura and Vindhya", "Aravalli and Vindhya", "Cardamom and Khasi Hills"], 0, "The Palghat Gap is an important pass between Kerala and Tamil Nadu."],
  ["The Vindhya Range lies to the north of the river:", ["Godavari", "Krishna", "Narmada", "Tapi"], 2, "The Narmada flows through a rift valley between the Vindhya Range (north) and the Satpura Range (south)."],
  ["Which range separates the Narmada and Tapi river valleys?", ["Aravalli", "Satpura", "Vindhya", "Nilgiri"], 1, "The Satpura Range lies between the Narmada valley (north) and the Tapi valley (south)."],
  ["The Aravalli Range extends mainly from:", ["Gujarat to Delhi", "Maharashtra to Karnataka", "Odisha to Andhra Pradesh", "Punjab to Jammu"], 0, "The Aravallis extend southwest–northeast from Gujarat through Rajasthan toward Delhi."],
  ["Which hill station is located in the Nilgiri Hills?", ["Shimla", "Ooty", "Darjeeling", "Mount Abu"], 1, "Ooty (Udhagamandalam) is a famous hill station in the Nilgiri Hills of Tamil Nadu."],
  ["Mount Abu is located in:", ["Gujarat", "Rajasthan", "Madhya Pradesh", "Maharashtra"], 1, "Mount Abu is in the Aravalli Range in Rajasthan."]
]);

addSection({ code: "GEO-PAS", subject: GS, category: "Geography", subtopic: "Mountain Passes", source: SRC }, [
  ["Which pass connects Srinagar with Leh?", ["Nathu La", "Zoji La", "Shipki La", "Bomdi La"], 1, "Zoji La is a strategic pass connecting the Kashmir Valley with Ladakh."],
  ["Nathu La Pass is located in:", ["Uttarakhand", "Sikkim", "Himachal Pradesh", "Arunachal Pradesh"], 1, "Nathu La is an important pass in Sikkim, connecting India with Tibet/China."]
]);

addSection({ code: "GEO-PLT", subject: GS, category: "Geography", subtopic: "Plateaus", source: SRC }, [
  ["The Deccan Plateau is mainly composed of:", ["Granite rocks", "Basaltic rocks", "Limestone rocks", "Sandstone rocks"], 1, "Extensive volcanic lava flows produced the basaltic rocks known as the Deccan Traps."],
  ["The Malwa Plateau lies mainly in:", ["Rajasthan and Gujarat", "Madhya Pradesh and Rajasthan", "Maharashtra and Karnataka", "Bihar and Jharkhand"], 1, "The Malwa Plateau occupies western Madhya Pradesh and adjoining southeastern Rajasthan."],
  ["The Chota Nagpur Plateau is mainly located in:", ["Odisha", "Jharkhand", "Chhattisgarh", "West Bengal"], 1, "The Chota Nagpur Plateau lies mainly in Jharkhand and is one of India's richest mineral regions."],
  ["Which plateau is known as the 'Ruhr of India' because of its mineral resources?", ["Malwa Plateau", "Meghalaya Plateau", "Chota Nagpur Plateau", "Deccan Plateau"], 2, "Chota Nagpur has abundant coal, iron ore, mica, bauxite and other minerals, supporting major industries."],
  ["Meghalaya Plateau is an extension of the:", ["Himalayan system", "Peninsular Plateau", "Indo-Gangetic Plain", "Coastal Plain"], 1, "It is geologically part of the Peninsular Plateau, separated from it by the Garo-Rajmahal gap."]
]);

addSection({ code: "GEO-DES", subject: GS, category: "Geography", subtopic: "Deserts", source: SRC }, [
  ["The Thar Desert is mainly located in:", ["Gujarat", "Rajasthan", "Haryana", "Punjab"], 1, "The Thar Desert occupies much of western Rajasthan and extends into Gujarat, Haryana, Punjab and Pakistan."],
  ["The Great Indian Desert lies west of the:", ["Aravalli Range", "Vindhya Range", "Satpura Range", "Western Ghats"], 0, "The Thar Desert is situated mainly to the west and northwest of the Aravalli Range."],
  ["The only major river flowing through the Rajasthan desert is:", ["Sabarmati", "Luni", "Mahi", "Chambal"], 1, "The Luni is the principal river of western Rajasthan and drains into the Rann of Kutch."],
  ["The Luni River drains into:", ["Arabian Sea directly", "Bay of Bengal", "Rann of Kutch", "Sambhar Lake"], 2, "The Luni becomes increasingly saline and ends in the marshy Rann of Kutch."],
  ["The Rann of Kutch is located in:", ["Rajasthan", "Gujarat", "Maharashtra", "Punjab"], 1, "The Great and Little Rann of Kutch are extensive salt marshes in Gujarat."]
]);

addSection({ code: "GEO-CLM", subject: GS, category: "Geography", subtopic: "Climate & Monsoon", source: SRC }, [
  ["Which mountain range acts as an important climatic barrier for the Indian monsoon?", ["Aravalli", "Western Ghats", "Eastern Ghats", "Satpura"], 1, "The Western Ghats force moisture-laden southwest monsoon winds to rise, causing heavy orographic rainfall on the western slopes."],
  ["The rain-shadow region of the Western Ghats lies mainly on the:", ["Western side", "Eastern side", "Northern side", "Southern side"], 1, "The leeward eastern side of the Western Ghats receives comparatively less rainfall."],
  ["The Coromandel Coast receives much of its rainfall from the:", ["Southwest monsoon only", "Retreating northeast monsoon", "Western disturbances", "Local convection only"], 1, "Tamil Nadu and the Coromandel Coast get a large share of rainfall in October–December from the northeast monsoon."]
]);

addSection({ code: "GEO-HIM", subject: GS, category: "Geography", subtopic: "Himalayas & NE Hills", source: SRC }, [
  ["The Khasi, Garo and Jaintia Hills are situated in:", ["Nagaland", "Meghalaya", "Manipur", "Mizoram"], 1, "These three hill groups make up much of the Meghalaya Plateau."],
  ["The Patkai Hills are mainly associated with:", ["Western India", "Northeastern India", "Central India", "Southern India"], 1, "The Patkai range is part of the northeastern hill system near the India–Myanmar border."],
  ["The hills along India's eastern boundary with Myanmar are collectively known as:", ["Purvanchal", "Himadri", "Sahyadri", "Karakoram"], 0, "The Patkai, Naga, Manipur and Mizo hills are broadly included in the Purvanchal system."],
  ["The Mizo Hills are also known as:", ["Lushai Hills", "Khasi Hills", "Garo Hills", "Naga Hills"], 0, "The Mizo Hills were traditionally known as the Lushai Hills."],
  ["The northernmost range of the Himalayas is:", ["Himachal", "Shiwalik", "Himadri", "Purvanchal"], 2, "The Himadri (Greater Himalaya) is the northernmost and highest Himalayan range."],
  ["The Lesser Himalayas are also known as:", ["Himadri", "Himachal", "Shiwalik", "Trans-Himalaya"], 1, "The Lesser Himalayas (Himachal) include ranges such as Pir Panjal and Dhauladhar."],
  ["The outermost range of the Himalayas is:", ["Himadri", "Himachal", "Shiwalik", "Karakoram"], 2, "The Shiwaliks form the southernmost and outermost Himalayan range."]
]);

addSection({ code: "GEO-NPL", subject: GS, category: "Geography", subtopic: "Northern Plains", source: SRC }, [
  ["The longitudinal valleys lying between the Lesser Himalaya and Shiwalik are called:", ["Doabs", "Duns", "Bhabar", "Terai"], 1, "Dehra Dun is a classic example of such a longitudinal valley."],
  ["The Bhabar region lies:", ["South of the Terai belt", "Along the foothills of the Shiwaliks", "In the Deccan Plateau", "Along the Eastern Ghats"], 1, "Bhabar is a narrow, porous belt of pebbles and coarse sediments deposited by Himalayan rivers."],
  ["The marshy belt south of the Bhabar is known as:", ["Bhangar", "Khadar", "Terai", "Doab"], 2, "In the Terai, streams re-emerge and the land is generally marshy and forested."],
  ["Old alluvium of the Northern Plains is called:", ["Khadar", "Bhangar", "Regur", "Laterite"], 1, "Bhangar refers to older alluvial deposits lying above the floodplain."],
  ["New alluvium deposited annually by rivers is called:", ["Bhangar", "Khadar", "Laterite", "Regur"], 1, "Khadar is younger alluvium renewed by floods and is generally highly fertile."],
  ["The land between two rivers is called:", ["Delta", "Doab", "Estuary", "Lagoon"], 1, "'Doab' literally means land between two rivers."],
  ["The world's largest delta is formed by:", ["Nile and Congo", "Ganga and Brahmaputra", "Godavari and Krishna", "Indus and Jhelum"], 1, "The Ganga-Brahmaputra-Meghna system forms the vast Bengal Delta."]
]);

addSection({ code: "GEO-CST", subject: GS, category: "Geography", subtopic: "Coasts", source: SRC }, [
  ["The Coromandel Coast lies along the:", ["Arabian Sea", "Bay of Bengal", "Gulf of Kutch", "Gulf of Khambhat"], 1, "The Coromandel Coast is the southeastern coastal region, mainly along Tamil Nadu and parts of Andhra Pradesh."],
  ["The Konkan Coast lies mainly between:", ["Gujarat and Goa", "Goa and Kerala", "Odisha and Andhra Pradesh", "Tamil Nadu and Kerala"], 0, "In standard Indian geography the Konkan Coast is the western coastal stretch around Maharashtra and Goa, south of Gujarat."],
  ["The Malabar Coast is mainly associated with:", ["Gujarat", "Maharashtra", "Kerala", "Odisha"], 2, "The Malabar Coast lies along the southwestern coast of India, especially Kerala."],
  ["The Northern Circars are located along the coast of:", ["Gujarat", "Andhra Pradesh", "Kerala", "Goa"], 1, "The Northern Circars are a coastal belt along the Bay of Bengal, chiefly in Andhra Pradesh."],
  ["Which is the largest coastal plain of India?", ["Western Coastal Plain", "Eastern Coastal Plain", "Konkan Coast", "Malabar Coast"], 1, "The Eastern Coastal Plain is broader and more extensive than the Western Coastal Plain."],
  ["Which coast is characterized by large river deltas?", ["Western Coast", "Eastern Coast", "Konkan Coast only", "Gujarat Coast only"], 1, "The Mahanadi, Godavari, Krishna and Kaveri form extensive deltas along the eastern coast."]
]);

addSection({ code: "GEO-ISL", subject: GS, category: "Geography", subtopic: "Islands", source: SRC }, [
  ["Lakshadweep Islands are mainly of:", ["Volcanic origin", "Coral origin", "Continental origin", "Glacial origin"], 1, "Lakshadweep consists mainly of coral islands, atolls and reefs in the Arabian Sea."],
  ["The Andaman and Nicobar Islands are located in the:", ["Arabian Sea", "Bay of Bengal", "Gulf of Kutch", "Gulf of Khambhat"], 1, "The archipelago lies southeast of mainland India in the Bay of Bengal."],
  ["The Ten Degree Channel separates:", ["India and Sri Lanka", "Andaman and Nicobar groups", "Lakshadweep and Maldives", "Great Nicobar and Sumatra"], 1, "It separates the Andaman group (north) from the Nicobar group (south)."],
  ["India's only active volcano is located at:", ["Narcondam Island", "Barren Island", "Car Nicobar", "Minicoy"], 1, "Barren Island in the Andaman Sea is India's only confirmed active volcano."],
  ["Indira Point, the southernmost point of Indian territory, is located on:", ["Little Andaman", "Great Nicobar Island", "Car Nicobar", "Minicoy Island"], 1, "Indira Point lies at the southern tip of Great Nicobar Island."]
]);

addSection({ code: "GEO-SOL", subject: GS, category: "Geography", subtopic: "Soils", source: SRC }, [
  ["Which soil is most suitable for cotton cultivation?", ["Alluvial soil", "Black soil", "Laterite soil", "Red soil"], 1, "Black (Regur) soil has high moisture-retaining capacity and is particularly suitable for cotton."],
  ["Black soil is mainly derived from:", ["Granite", "Basalt", "Sandstone", "Limestone"], 1, "Black soil developed largely from weathering of Deccan Trap basaltic rocks."],
  ["Which soil is widely found in the Ganga-Brahmaputra plains?", ["Laterite", "Black", "Alluvial", "Desert"], 2, "The Indo-Gangetic-Brahmaputra plains are dominated by fertile alluvial soils deposited by rivers."],
  ["Laterite soil is generally rich in:", ["Nitrogen and phosphorus", "Iron and aluminium", "Calcium and magnesium", "Potassium and nitrogen"], 1, "Intense leaching under heavy rainfall leaves laterite soils rich in iron and aluminium oxides."]
]);

addSection({ code: "GEO-STA", subject: GS, category: "Geography", subtopic: "States & Superlatives", source: SRC }, [
  ["The largest state in India by area is:", ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"], 2, "Rajasthan is India's largest state by geographical area."],
  ["The smallest state in India by area is:", ["Sikkim", "Goa", "Tripura", "Manipur"], 1, "Goa is the smallest Indian state by geographical area."],
  ["Which Indian state has the longest coastline?", ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"], 1, "Gujarat has India's longest coastline among the states, along the Arabian Sea."],
  ["Which state is known as the 'Spice Garden of India'?", ["Kerala", "Karnataka", "Tamil Nadu", "Assam"], 0, "Kerala is popularly called the Spice Garden of India because of its historic and major spice production."],
  ["The 'Land of Rising Sun' in India is:", ["Assam", "Arunachal Pradesh", "Sikkim", "Nagaland"], 1, "Arunachal Pradesh is India's easternmost state, known as the Land of the Rising Sun."],
  ["Which state is known as the 'Land of Five Rivers'?", ["Haryana", "Punjab", "Rajasthan", "Himachal Pradesh"], 1, "Punjab means 'five waters' in Persian – the Sutlej, Beas, Ravi, Chenab and Jhelum."]
]);

addSection({ code: "GEO-WLD", subject: GS, category: "Geography", subtopic: "National Parks & Wildlife", source: SRC }, [
  ["Kaziranga National Park is famous for:", ["Asiatic lions", "One-horned rhinoceros", "Snow leopards", "Blackbucks"], 1, "Kaziranga in Assam is famous for its large population of the Indian one-horned rhinoceros."],
  ["Gir National Park is famous for:", ["Tiger", "Asiatic Lion", "Rhinoceros", "Elephant"], 1, "Gir in Gujarat is the last major natural habitat of the Asiatic lion."],
  ["Periyar Wildlife Sanctuary is located in:", ["Kerala", "Karnataka", "Tamil Nadu", "Goa"], 0, "Periyar is in Kerala's Western Ghats, well known for its elephants and tigers."],
  ["Sundarbans National Park is famous for:", ["Asiatic Lion", "Royal Bengal Tiger", "One-horned Rhinoceros", "Snow Leopard"], 1, "The Sundarbans are famous for the Royal Bengal Tiger and their extensive mangrove ecosystem."],
  ["Which Indian state has the largest forest area in terms of geographical area?", ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Odisha"], 0, "Madhya Pradesh has the largest forest area in absolute terms among Indian states."]
]);

/* ============================== HISTORY ============================== */

addSection({ code: "HIS-SUL", subject: GS, category: "History", subtopic: "Delhi Sultanate", source: SRC }, [
  ["Name the Sultan who banned hoarding of essential commodities in India?", ["Iltutmish", "Balban", "Alauddin Khilji", "Firoz Shah Tughlaq"], 2, "Alauddin Khilji introduced extensive market-control measures and regulated prices of essential commodities."],
  ["Who was the founder of the Slave Dynasty in India?", ["Iltutmish", "Qutb-ud-din Aibak", "Balban", "Razia Sultan"], 1, "Qutb-ud-din Aibak founded the Mamluk (Slave) Dynasty in 1206 after Muhammad Ghori's death."],
  ["Who was the first woman ruler of the Delhi Sultanate?", ["Nur Jahan", "Razia Sultan", "Chand Bibi", "Rani Durgavati"], 1, "Razia Sultan ruled from 1236 to 1240 and was the only woman to sit on the Delhi throne."],
  ["Who completed the construction of the Qutub Minar?", ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khilji"], 1, "Aibak began the Qutub Minar; Iltutmish completed most of it."],
  ["Who introduced the policy of 'Blood and Iron'?", ["Iltutmish", "Balban", "Alauddin Khilji", "Muhammad bin Tughlaq"], 1, "Ghiyasuddin Balban followed a strict 'Blood and Iron' policy to strengthen the Sultan's authority."],
  ["Who introduced the system of 'Dagh' and 'Chehra'?", ["Balban", "Alauddin Khilji", "Sher Shah Suri", "Firoz Shah Tughlaq"], 1, "Dagh meant branding horses; Chehra was a descriptive roll of soldiers – both prevented army fraud."],
  ["Which Sultan introduced strict market control measures in Delhi?", ["Iltutmish", "Balban", "Alauddin Khilji", "Sikandar Lodi"], 2, "Alauddin regulated markets for food grains, cloth, horses, cattle and other commodities."],
  ["Which Sultan shifted his capital from Delhi to Daulatabad?", ["Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Sikandar Lodi"], 1, "Muhammad bin Tughlaq moved the capital to Daulatabad (Devagiri), though the move was later abandoned."],
  ["Who introduced token currency in the Delhi Sultanate?", ["Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Ibrahim Lodi"], 1, "He introduced copper tokens valued like silver coins, but the experiment failed due to counterfeiting."],
  ["Who founded the city of Tughlaqabad?", ["Ghiyasuddin Tughlaq", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq", "Balban"], 0, "Ghiyasuddin Tughlaq, founder of the Tughlaq dynasty, built the fortified city near Delhi."],
  ["Which Sultan is known for establishing numerous canals?", ["Balban", "Alauddin Khilji", "Firoz Shah Tughlaq", "Sikandar Lodi"], 2, "Firoz Shah Tughlaq constructed several irrigation canals to promote agriculture."],
  ["Who founded the Lodi Dynasty?", ["Sikandar Lodi", "Bahlol Lodi", "Ibrahim Lodi", "Daulat Khan Lodi"], 1, "Bahlol Lodi founded the Lodi Dynasty in 1451, the first Afghan dynasty to rule Delhi."],
  ["Who was the last Sultan of the Delhi Sultanate?", ["Sikandar Lodi", "Ibrahim Lodi", "Bahlol Lodi", "Daulat Khan Lodi"], 1, "Ibrahim Lodi was defeated by Babur at the First Battle of Panipat (1526), ending the Sultanate."],
  ["Who introduced the 'Iqta' system in the Delhi Sultanate?", ["Iltutmish", "Balban", "Alauddin Khilji", "Firoz Shah Tughlaq"], 0, "Iltutmish systematically organised the Iqta system – revenue assignments given to officials for administrative and military service."],
  ["Who was known as 'Lakh Baksh'?", ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khilji"], 0, "Aibak was known as Lakh Baksh ('giver of lakhs') because of his generosity."],
  ["Who built the Alai Darwaza?", ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"], 2, "Alauddin Khilji built the Alai Darwaza in 1311 as an entrance to the Qutub complex."],
  ["Who built the Hauz Khas reservoir?", ["Iltutmish", "Alauddin Khilji", "Muhammad bin Tughlaq", "Firoz Shah Tughlaq"], 1, "Alauddin Khilji built the large reservoir Hauz-i-Alai, later associated with Hauz Khas."],
  ["Who among the following was known as the 'Parrot of India'?", ["Amir Khusrau", "Abul Fazl", "Tansen", "Badauni"], 0, "Amir Khusrau – poet, musician and scholar – is known as the 'Parrot of India' (Tuti-i-Hind)."]
]);

addSection({ code: "HIS-MUG", subject: GS, category: "History", subtopic: "Mughal Empire", source: SRC }, [
  ["The First Battle of Panipat was fought in:", ["1526", "1556", "1565", "1576"], 0, "Babur defeated Ibrahim Lodi in 1526, establishing Mughal rule in India."],
  ["Which ruler is associated with the construction of the city of Fatehpur Sikri?", ["Humayun", "Akbar", "Jahangir", "Shah Jahan"], 1, "Akbar developed Fatehpur Sikri as his imperial capital in the 16th century."],
  ["Who founded the Mughal Empire in India?", ["Humayun", "Akbar", "Babur", "Sher Shah Suri"], 2, "Babur founded the Mughal Empire after the First Battle of Panipat in 1526."],
  ["Babur defeated Rana Sanga in the Battle of Khanwa in:", ["1526", "1527", "1528", "1529"], 1, "Babur defeated the Rajput confederacy led by Rana Sanga at Khanwa in 1527."],
  ["The Battle of Chanderi was fought in:", ["1526", "1527", "1528", "1530"], 2, "Babur defeated Medini Rai at Chanderi in 1528."],
  ["Who wrote the 'Baburnama'?", ["Abul Fazl", "Babur", "Gulbadan Begum", "Jahangir"], 1, "The Baburnama is Babur's autobiography, originally written in Chagatai Turkish."],
  ["Who defeated Humayun at the Battle of Chausa?", ["Sher Shah Suri", "Akbar", "Ibrahim Lodi", "Bahadur Shah"], 0, "Sher Shah defeated Humayun at Chausa in 1539."],
  ["The Battle of Kannauj (Bilgram) was fought in:", ["1539", "1540", "1545", "1556"], 1, "Sher Shah Suri defeated Humayun at Kannauj/Bilgram in 1540, forcing him into exile."],
  ["Who introduced the Rupiya as a standard silver coin?", ["Akbar", "Sher Shah Suri", "Alauddin Khilji", "Humayun"], 1, "Sher Shah Suri introduced the standardised silver Rupiya, a precursor of the modern rupee."],
  ["The Grand Trunk Road was improved and extended extensively by:", ["Akbar", "Sher Shah Suri", "Jahangir", "Aurangzeb"], 1, "Sher Shah improved the road from Sonargaon in Bengal to the Indus region, later known as the Grand Trunk Road."],
  ["Who introduced the system of 'Sarais' along important roads?", ["Sher Shah Suri", "Akbar", "Babur", "Firoz Shah Tughlaq"], 0, "Sher Shah established sarais (rest houses) at regular intervals for travellers and traders."],
  ["Akbar abolished the pilgrimage tax in:", ["1562", "1563", "1564", "1572"], 1, "Akbar abolished the pilgrimage tax in 1563 as part of his policy of religious tolerance."],
  ["Akbar abolished the Jizya tax in:", ["1562", "1563", "1564", "1575"], 2, "Akbar abolished Jizya in 1564, reflecting his policy of religious accommodation."],
  ["Who introduced the Mansabdari system?", ["Babur", "Humayun", "Akbar", "Aurangzeb"], 2, "Akbar developed the Mansabdari system to organise the Mughal nobility and military administration."],
  ["The term 'Mansab' literally means:", ["Land", "Rank or position", "Tax", "Army"], 1, "A mansab represented the rank or official position of a Mughal officer."],
  ["Who wrote the 'Akbarnama'?", ["Badauni", "Abul Fazl", "Faizi", "Amir Khusrau"], 1, "Abul Fazl wrote the Akbarnama, which includes an account of Akbar's reign."],
  ["The 'Ain-i-Akbari' was written by:", ["Abul Fazl", "Abdul Qadir Badauni", "Faizi", "Nizamuddin Ahmad"], 0, "Ain-i-Akbari is the third volume of the Akbarnama and details Mughal administration, society and economy."],
  ["Who started the policy of 'Sulh-i-Kul'?", ["Babur", "Akbar", "Jahangir", "Shah Jahan"], 1, "Sulh-i-Kul ('universal peace') was Akbar's policy of tolerance among religious communities."],
  ["The Ibadat Khana was established by Akbar at:", ["Agra", "Delhi", "Fatehpur Sikri", "Lahore"], 2, "Akbar established the Ibadat Khana at Fatehpur Sikri in 1575 for religious discussions."],
  ["Who among the following Mughal rulers started the construction of the Taj Mahal?", ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], 2, "Shah Jahan commissioned the Taj Mahal at Agra in memory of his wife Mumtaz Mahal."],
  ["The Taj Mahal was built on the bank of the:", ["Ganga", "Yamuna", "Narmada", "Godavari"], 1, "The Taj Mahal stands on the southern bank of the Yamuna at Agra."],
  ["Who constructed the Red Fort at Delhi?", ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], 2, "Shah Jahan built the Red Fort after shifting his capital from Agra to Shahjahanabad."],
  ["The Peacock Throne was commissioned by:", ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], 2, "Shah Jahan commissioned the Peacock Throne, renowned for its decoration and precious stones."],
  ["Who was the last major Mughal emperor?", ["Shah Jahan", "Aurangzeb", "Bahadur Shah I", "Muhammad Shah"], 1, "Aurangzeb (ruled 1658–1707) was the last Mughal ruler to exercise extensive imperial authority."],
  ["Aurangzeb reimposed Jizya in:", ["1665", "1675", "1679", "1685"], 2, "Aurangzeb reimposed the Jizya tax on non-Muslims in 1679."],
  ["The Battle of Haldighati was fought between Maharana Pratap and:", ["Babur", "Akbar's forces", "Aurangzeb's forces", "Sher Shah Suri"], 1, "Fought in 1576 between Maharana Pratap and Mughal forces led by Raja Man Singh."],
  ["Who was the famous musician in Akbar's court?", ["Tansen", "Baiju Bawra", "Amir Khusrau", "Swami Haridas"], 0, "Miyan Tansen was one of the most celebrated musicians of Akbar's court and one of the Navaratnas."]
]);

addSection({ code: "HIS-MAR", subject: GS, category: "History", subtopic: "Marathas", source: SRC }, [
  ["Who founded the Maratha kingdom?", ["Sambhaji", "Shivaji", "Balaji Vishwanath", "Baji Rao I"], 1, "Shivaji Maharaj established an independent Maratha kingdom in western India."],
  ["Shivaji was crowned at Raigad in:", ["1664", "1674", "1680", "1688"], 1, "Shivaji was formally crowned Chhatrapati at Raigad in 1674."],
  ["The council of eight ministers under Shivaji was known as:", ["Navaratna", "Ashtapradhan", "Mansabdari", "Chahalgani"], 1, "The Ashtapradhan was Shivaji's council of eight principal ministers."],
  ["Who was the first Peshwa of the Maratha Empire?", ["Balaji Vishwanath", "Baji Rao I", "Madhavrao I", "Moropant Pingle"], 0, "Balaji Vishwanath became Peshwa in 1713 and helped consolidate Maratha power."],
  ["The Third Battle of Panipat was fought in:", ["1757", "1761", "1764", "1772"], 1, "Fought in 1761 between the Marathas and Ahmad Shah Abdali."]
]);

/* ============================== CHEMISTRY ============================== */

addSection({ code: "CHM-CMP", subject: GS, category: "Chemistry", subtopic: "Common Compounds", source: SRC }, [
  ["Which is the chemical formula of common salt?", ["NaCl", "CaCO₃", "Na₃PO₄", "Na₂CO₃"], 0, "Common salt is sodium chloride (NaCl), widely used in food preservation and cooking."],
  ["Which gas is commonly known as laughing gas?", ["Nitrogen", "Nitrous oxide", "Nitric oxide", "Carbon dioxide"], 1, "Nitrous oxide (N₂O) is laughing gas; used as an anaesthetic and propellant."],
  ["What is the chemical formula of baking soda?", ["Na₂CO₃", "NaHCO₃", "NaOH", "NaCl"], 1, "Baking soda is sodium bicarbonate (NaHCO₃), used in baking and as an antacid."],
  ["What is the chemical formula of washing soda?", ["NaHCO₃", "Na₂CO₃·10H₂O", "NaOH", "CaCO₃"], 1, "Washing soda is sodium carbonate decahydrate, used for cleaning and softening hard water."],
  ["What is the chemical formula of bleaching powder?", ["CaOCl₂", "CaCO₃", "Ca(OH)₂", "CaCl₂"], 0, "Bleaching powder is CaOCl₂, used for bleaching and disinfecting drinking water."],
  ["Which compound is commonly known as quicklime?", ["CaCO₃", "CaO", "Ca(OH)₂", "CaCl₂"], 1, "Calcium oxide (CaO) is called quicklime or burnt lime."],
  ["Which compound is known as slaked lime?", ["CaO", "CaCO₃", "Ca(OH)₂", "CaCl₂"], 2, "Calcium hydroxide Ca(OH)₂ is slaked lime, produced when quicklime reacts with water."],
  ["Which gas turns limewater milky?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 2, "CO₂ reacts with calcium hydroxide to form insoluble calcium carbonate, making limewater milky."],
  ["What is the chemical formula of marble?", ["CaO", "CaCO₃", "MgCO₃", "Na₂CO₃"], 1, "Marble is metamorphosed limestone, mainly calcium carbonate (CaCO₃)."]
]);

addSection({ code: "CHM-ACD", subject: GS, category: "Chemistry", subtopic: "Acids, Bases & pH", source: SRC }, [
  ["Which acid is present in vinegar?", ["Citric acid", "Acetic acid", "Oxalic acid", "Formic acid"], 1, "Vinegar contains acetic acid (CH₃COOH) in dilute aqueous solution."],
  ["Which acid is present in lemon?", ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"], 1, "Citrus fruits such as lemons and oranges contain citric acid."],
  ["Which acid is present in curd?", ["Lactic acid", "Acetic acid", "Tartaric acid", "Sulphuric acid"], 0, "Bacteria convert lactose in milk into lactic acid, giving curd its sour taste."],
  ["Which acid is present in an ant sting?", ["Citric acid", "Formic acid", "Acetic acid", "Oxalic acid"], 1, "Ant venom contains formic acid, which causes irritation and burning."],
  ["Which acid is known as the 'King of Chemicals'?", ["Hydrochloric acid", "Nitric acid", "Sulphuric acid", "Acetic acid"], 2, "Sulphuric acid (H₂SO₄) is the King of Chemicals because of its huge industrial importance."],
  ["What is the pH of a neutral solution at 25°C?", ["0", "5", "7", "14"], 2, "At 25°C a neutral aqueous solution has pH 7."],
  ["A solution having pH less than 7 is:", ["Basic", "Neutral", "Acidic", "Saline"], 2, "pH below 7 is acidic; above 7 is basic."],
  ["Which of the following is a strong base?", ["NaOH", "NH₄OH", "CH₃COOH", "H₂CO₃"], 0, "Sodium hydroxide is a strong alkali that dissociates almost completely in water."],
  ["Which of the following is an alkali?", ["HCl", "NaOH", "CO₂", "H₂SO₄"], 1, "An alkali is a water-soluble base. Sodium hydroxide is a common alkali."],
  ["Which indicator turns blue litmus paper red?", ["Base", "Acid", "Salt", "Water"], 1, "Acids turn blue litmus red; bases turn red litmus blue."],
  ["Which indicator turns red litmus paper blue?", ["Acid", "Base", "Neutral salt", "Alcohol"], 1, "Basic or alkaline solutions turn red litmus blue."]
]);

addSection({ code: "CHM-MET", subject: GS, category: "Chemistry", subtopic: "Elements & Metals", source: SRC }, [
  ["Which metal is liquid at room temperature?", ["Sodium", "Mercury", "Aluminium", "Iron"], 1, "Mercury (Hg) is the only metal that is liquid under ordinary room conditions."],
  ["Which non-metal is liquid at room temperature?", ["Chlorine", "Bromine", "Iodine", "Sulphur"], 1, "Bromine (Br₂) is a reddish-brown liquid at room temperature."],
  ["Which is the lightest metal?", ["Lithium", "Sodium", "Aluminium", "Magnesium"], 0, "Lithium is the lightest metal, with the lowest density among metals."],
  ["Which is the lightest element?", ["Helium", "Hydrogen", "Oxygen", "Lithium"], 1, "Hydrogen has the lowest atomic mass of all elements."],
  ["Which is the most abundant element in the Earth's crust by mass?", ["Silicon", "Oxygen", "Aluminium", "Iron"], 1, "Oxygen is the largest component of the crust by mass, followed by silicon and aluminium."],
  ["Which metal is the best conductor of electricity?", ["Copper", "Aluminium", "Silver", "Gold"], 2, "Silver has the highest electrical conductivity among metals."],
  ["Which metal is commonly used for electrical wiring?", ["Iron", "Copper", "Zinc", "Lead"], 1, "Copper has high conductivity and good ductility, so it is widely used in wires."],
  ["Which metal is protected from corrosion by a layer of oxide?", ["Aluminium", "Iron", "Sodium", "Potassium"], 0, "Aluminium forms a thin, adherent Al₂O₃ layer that protects it from further corrosion."]
]);

addSection({ code: "CHM-COR", subject: GS, category: "Chemistry", subtopic: "Corrosion & Rusting", source: SRC }, [
  ["Rust is chemically:", ["Hydrated ferrous oxide", "Hydrated ferric oxide", "Iron carbonate", "Iron sulphide"], 1, "Rust is mainly hydrated ferric oxide, Fe₂O₃·xH₂O."],
  ["Rusting of iron requires:", ["Only oxygen", "Only water", "Oxygen and moisture", "Nitrogen and moisture"], 2, "Both oxygen and water/moisture are essential for ordinary rusting."]
]);

addSection({ code: "CHM-ORE", subject: GS, category: "Chemistry", subtopic: "Ores & Alloys", source: SRC }, [
  ["Which metal is extracted from bauxite?", ["Iron", "Copper", "Aluminium", "Zinc"], 2, "Bauxite is the principal ore of aluminium."],
  ["Hematite is an important ore of:", ["Copper", "Iron", "Aluminium", "Zinc"], 1, "Hematite (Fe₂O₃) is one of the principal ores of iron."],
  ["Which is the chief ore of aluminium?", ["Bauxite", "Hematite", "Galena", "Cinnabar"], 0, "Bauxite is the principal commercial ore from which aluminium is extracted."],
  ["Galena is an ore of:", ["Zinc", "Lead", "Mercury", "Copper"], 1, "Galena (PbS) is the principal ore of lead."],
  ["Cinnabar is an ore of:", ["Mercury", "Zinc", "Copper", "Iron"], 0, "Cinnabar (HgS) is the principal ore of mercury."],
  ["Zinc is mainly extracted from:", ["Zinc blende", "Bauxite", "Galena", "Cinnabar"], 0, "Zinc blende (ZnS), also called sphalerite, is an important ore of zinc."],
  ["Which alloy is made primarily of copper and zinc?", ["Bronze", "Brass", "Solder", "Steel"], 1, "Brass is an alloy mainly of copper and zinc."],
  ["Bronze is an alloy of:", ["Copper and zinc", "Copper and tin", "Iron and carbon", "Aluminium and copper"], 1, "Bronze is traditionally an alloy of copper and tin."],
  ["Stainless steel mainly contains iron, chromium and:", ["Carbon", "Sodium", "Calcium", "Mercury"], 0, "Stainless steel is an iron-based alloy with chromium, carbon and often nickel."]
]);

addSection({ code: "CHM-GAS", subject: GS, category: "Chemistry", subtopic: "Gases & Tests", source: SRC }, [
  ["Which gas is essential for respiration?", ["Nitrogen", "Oxygen", "Carbon dioxide", "Hydrogen"], 1, "Oxygen is required for aerobic respiration, releasing energy from food."],
  ["Which gas is released during photosynthesis?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], 1, "Plants release oxygen as a by-product of splitting water molecules."],
  ["Which gas is mainly responsible for the greenhouse effect among the following?", ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], 1, "CO₂ is an important greenhouse gas; others include methane, nitrous oxide and water vapour."],
  ["Which gas is known as producer gas?", ["Carbon monoxide + nitrogen", "Hydrogen + oxygen", "Carbon dioxide + oxygen", "Methane + hydrogen"], 0, "Producer gas is mainly CO and N₂, made by passing air over red-hot carbon."],
  ["Which gas is known as water gas?", ["CO + H₂", "CO₂ + H₂", "N₂ + H₂", "CH₄ + CO₂"], 0, "Water gas is a mixture of CO and H₂, made by passing steam over red-hot carbon."],
  ["Which gas is commonly used in the manufacture of ammonia?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Chlorine"], 1, "In the Haber-Bosch process nitrogen reacts with hydrogen to produce ammonia."],
  ["The chemical formula of ammonia is:", ["NH₃", "NH₄", "NO₂", "N₂O"], 0, "Ammonia has one nitrogen atom and three hydrogen atoms."],
  ["Which gas has a rotten-egg smell?", ["Sulphur dioxide", "Hydrogen sulphide", "Carbon monoxide", "Nitrogen dioxide"], 1, "Hydrogen sulphide (H₂S) smells of rotten eggs and is highly toxic."],
  ["Which gas is poisonous and is known as the 'silent killer'?", ["Carbon dioxide", "Carbon monoxide", "Oxygen", "Nitrogen"], 1, "CO is colourless and odourless; it binds strongly to haemoglobin and can cause fatal poisoning."],
  ["Which chemical is used to test for starch?", ["Iodine solution", "Benedict's solution", "Fehling's solution", "Limewater"], 0, "Iodine gives a blue-black colour in the presence of starch."]
]);

/* =============================== BIOLOGY =============================== */

addSection({ code: "BIO-DIS", subject: GS, category: "Biology", subtopic: "Diseases", source: SRC }, [
  ["Which of the following is a water-borne disease?", ["Tuberculosis", "Typhoid", "Malaria", "Diphtheria"], 1, "Typhoid is caused by Salmonella Typhi and spreads via contaminated food and water."],
  ["Which of the following diseases is caused by a virus?", ["Tuberculosis", "Cholera", "Measles", "Typhoid"], 2, "Measles is a highly contagious viral disease."],
  ["Which disease is caused by Plasmodium?", ["Dengue", "Malaria", "Cholera", "Typhoid"], 1, "Malaria is caused by Plasmodium parasites, transmitted by infected female Anopheles mosquitoes."],
  ["Malaria is transmitted by:", ["Male Anopheles mosquito", "Female Anopheles mosquito", "Female Culex mosquito", "Housefly"], 1, "The female Anopheles mosquito is the vector of malaria parasites."],
  ["Dengue is mainly transmitted by:", ["Anopheles mosquito", "Aedes mosquito", "Culex mosquito", "Sandfly"], 1, "Dengue is primarily transmitted by infected Aedes aegypti mosquitoes."],
  ["Which disease is commonly known as 'break-bone fever'?", ["Malaria", "Dengue", "Typhoid", "Cholera"], 1, "Dengue is called break-bone fever because of severe muscle and joint pain."],
  ["Cholera is mainly caused by:", ["Vibrio cholerae", "Salmonella Typhi", "Plasmodium vivax", "Mycobacterium tuberculosis"], 0, "Cholera is an acute intestinal infection caused by Vibrio cholerae, spread through contaminated water or food."],
  ["Tuberculosis is caused by:", ["Escherichia coli", "Mycobacterium tuberculosis", "Vibrio cholerae", "Salmonella Typhi"], 1, "TB is primarily caused by Mycobacterium tuberculosis and commonly affects the lungs."],
  ["Which disease primarily affects the lungs?", ["Tuberculosis", "Cholera", "Typhoid", "Jaundice"], 0, "TB most commonly affects the lungs, although it can affect other organs."],
  ["AIDS is caused by:", ["HBV", "HIV", "HCV", "HPV"], 1, "HIV (Human Immunodeficiency Virus) attacks the immune system and can lead to AIDS."],
  ["HIV primarily attacks which cells of the immune system?", ["Red blood cells", "CD4 T lymphocytes", "Platelets", "Neutrophils only"], 1, "HIV primarily targets CD4 T cells, weakening the immune response."]
]);

addSection({ code: "BIO-END", subject: GS, category: "Biology", subtopic: "Endocrine System", source: SRC }, [
  ["Which disease is caused by a deficiency of insulin?", ["Diabetes mellitus", "Goitre", "Scurvy", "Rickets"], 0, "Diabetes mellitus occurs when the body doesn't make enough insulin or can't use it effectively, raising blood glucose."],
  ["Insulin is secreted by the:", ["Liver", "Pancreas", "Thyroid", "Kidney"], 1, "Insulin is produced by beta cells of the Islets of Langerhans in the pancreas."],
  ["Which hormone regulates blood sugar level by lowering it?", ["Glucagon", "Insulin", "Thyroxine", "Adrenaline"], 1, "Insulin lowers blood glucose by promoting glucose uptake and storage."],
  ["Which gland is known as the 'master gland' of the human body?", ["Thyroid", "Pituitary", "Adrenal", "Pancreas"], 1, "The pituitary's hormones regulate several other endocrine glands."],
  ["Which hormone is secreted by the thyroid gland?", ["Insulin", "Thyroxine", "Adrenaline", "Growth hormone"], 1, "The thyroid produces thyroxine (T₄) and triiodothyronine (T₃), which regulate metabolism."]
]);

addSection({ code: "BIO-VIT", subject: GS, category: "Biology", subtopic: "Vitamins & Minerals", source: SRC }, [
  ["Which vitamin contains cobalt as a central element?", ["Vitamin B₁", "Vitamin B₆", "Vitamin B₁₂", "Vitamin C"], 2, "Vitamin B₁₂ (cobalamin) contains cobalt and is essential for blood formation and nervous-system function."],
  ["Iodine deficiency causes:", ["Scurvy", "Goitre", "Rickets", "Beriberi"], 1, "Iodine is needed for thyroid hormones; severe deficiency enlarges the thyroid (goitre)."],
  ["Vitamin C deficiency causes:", ["Rickets", "Scurvy", "Beriberi", "Night blindness"], 1, "Scurvy causes bleeding gums and poor wound healing."],
  ["Vitamin D deficiency causes:", ["Beriberi", "Rickets", "Scurvy", "Pellagra"], 1, "In children, vitamin D deficiency causes rickets (defective bone mineralisation)."],
  ["Vitamin A deficiency may cause:", ["Night blindness", "Scurvy", "Beriberi", "Pellagra"], 0, "Vitamin A is essential for vision; deficiency causes night blindness and, in severe cases, xerophthalmia."],
  ["Vitamin B₁ deficiency causes:", ["Beriberi", "Rickets", "Scurvy", "Goitre"], 0, "Beriberi is associated with deficiency of thiamine (vitamin B₁)."],
  ["Pellagra is caused by deficiency of:", ["Vitamin B₁", "Vitamin B₃", "Vitamin C", "Vitamin D"], 1, "Pellagra is caused by deficiency of niacin (B₃): dermatitis, diarrhoea and dementia."],
  ["Which vitamin is essential for blood clotting?", ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"], 2, "Vitamin K is essential for synthesis of several clotting proteins."],
  ["Which vitamin is known as the 'sunshine vitamin'?", ["Vitamin A", "Vitamin B₁₂", "Vitamin C", "Vitamin D"], 3, "The skin synthesises vitamin D when exposed to ultraviolet-B radiation from sunlight."],
  ["Which mineral is essential for the formation of haemoglobin?", ["Calcium", "Iron", "Sodium", "Potassium"], 1, "Iron is a key component of haemoglobin, the oxygen-carrying protein in red blood cells."],
  ["Deficiency of iron causes:", ["Anaemia", "Goitre", "Rickets", "Scurvy"], 0, "Iron deficiency commonly causes anaemia, reducing the blood's oxygen-carrying capacity."]
]);

addSection({ code: "BIO-BLD", subject: GS, category: "Biology", subtopic: "Blood & Circulation", source: SRC }, [
  ["Which blood group is known as the universal donor for red blood cells?", ["AB positive", "O negative", "A positive", "B negative"], 1, "O-negative red cells lack A, B and Rh(D) antigens, so they suit emergency transfusion."],
  ["Which blood group is known as the universal recipient for red blood cells?", ["O negative", "A positive", "AB positive", "B positive"], 2, "AB-positive individuals can generally receive red cells from all ABO and Rh groups."],
  ["Which blood cells help in fighting infections?", ["Red blood cells", "White blood cells", "Platelets", "Plasma"], 1, "White blood cells (WBCs) play major roles in immune defence."],
  ["Which blood cells are primarily responsible for blood clotting?", ["RBCs", "WBCs", "Platelets", "Plasma cells"], 2, "Platelets (thrombocytes) are essential for forming clots and stopping bleeding."],
  ["The red colour of blood is mainly due to:", ["Plasma", "Haemoglobin", "Platelets", "White blood cells"], 1, "Haemoglobin, an iron-containing protein in red cells, gives blood its red colour."],
  ["Which blood vessel carries oxygenated blood from the lungs to the heart?", ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"], 1, "Pulmonary veins carry oxygen-rich blood from the lungs to the left atrium."],
  ["Which blood vessel carries deoxygenated blood from the heart to the lungs?", ["Pulmonary artery", "Pulmonary vein", "Aorta", "Coronary artery"], 0, "The pulmonary artery carries deoxygenated blood from the right ventricle to the lungs."],
  ["The largest artery in the human body is:", ["Pulmonary artery", "Aorta", "Carotid artery", "Renal artery"], 1, "The aorta carries oxygenated blood from the left ventricle to the systemic circulation."],
  ["The normal resting heart rate of a healthy adult is approximately:", ["20–30 beats per minute", "40–50 beats per minute", "60–100 beats per minute", "120–150 beats per minute"], 2, "A typical resting heart rate is about 60–100 beats per minute."],
  ["Which chamber of the heart pumps oxygenated blood to the whole body?", ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"], 3, "The left ventricle pumps oxygenated blood into the aorta."],
  ["Which chamber of the heart receives deoxygenated blood from the body?", ["Left atrium", "Left ventricle", "Right atrium", "Right ventricle"], 2, "The right atrium receives deoxygenated blood via the superior and inferior vena cava."],
  ["Which blood vessel supplies oxygenated blood to the heart muscle itself?", ["Pulmonary artery", "Coronary artery", "Renal artery", "Hepatic vein"], 1, "The coronary arteries supply oxygen-rich blood to the myocardium."]
]);

addSection({ code: "BIO-DIG", subject: GS, category: "Biology", subtopic: "Digestion & Enzymes", source: SRC }, [
  ["Bile is produced by the:", ["Gallbladder", "Liver", "Pancreas", "Small intestine"], 1, "Bile is produced by the liver and stored and concentrated in the gallbladder."],
  ["Bile is stored in the:", ["Pancreas", "Gallbladder", "Liver", "Duodenum"], 1, "The gallbladder stores and concentrates bile before releasing it into the small intestine."],
  ["Which enzyme is present in saliva?", ["Pepsin", "Amylase", "Trypsin", "Lipase only"], 1, "Salivary amylase begins digesting starch in the mouth."],
  ["The digestion of proteins begins in the:", ["Mouth", "Stomach", "Small intestine", "Large intestine"], 1, "Pepsin in the stomach starts breaking proteins into smaller peptides."],
  ["The main site of absorption of digested food is the:", ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], 1, "The small intestine is the principal site of digestion and absorption."],
  ["Which structure increases the absorptive surface area of the small intestine?", ["Alveoli", "Villi", "Nephrons", "Bronchi"], 1, "Villi and microvilli greatly increase the area for nutrient absorption."],
  ["Which enzyme digests proteins in the stomach?", ["Amylase", "Pepsin", "Lipase", "Maltase"], 1, "Pepsin is a major proteolytic enzyme in the stomach."],
  ["Which enzyme helps digest fats?", ["Lipase", "Amylase", "Pepsin", "Maltase"], 0, "Lipase breaks down fats into fatty acids and glycerol."],
  ["Which enzyme converts starch into simpler sugars?", ["Lipase", "Amylase", "Pepsin", "Trypsin"], 1, "Amylase breaks starch into smaller carbohydrates such as maltose and dextrins."]
]);

addSection({ code: "BIO-ORG", subject: GS, category: "Biology", subtopic: "Human Organs & Systems", source: SRC }, [
  ["The largest organ of the human body is:", ["Liver", "Skin", "Brain", "Lung"], 1, "The skin is the largest organ by surface area and mass."],
  ["The largest internal organ of the human body is:", ["Kidney", "Liver", "Heart", "Lung"], 1, "The liver is the largest internal organ."],
  ["The functional unit of the kidney is:", ["Neuron", "Nephron", "Alveolus", "Villus"], 1, "The nephron filters blood and forms urine."],
  ["The functional unit of the nervous system is:", ["Nephron", "Neuron", "Alveolus", "Axon"], 1, "A neuron is the basic functional cell of the nervous system."],
  ["The functional unit of the lung is commonly considered the:", ["Nephron", "Alveolus", "Neuron", "Villus"], 1, "Alveoli are tiny air sacs where oxygen and CO₂ are exchanged."],
  ["Which organ purifies the blood and produces urine?", ["Liver", "Kidney", "Heart", "Pancreas"], 1, "The kidneys filter blood, remove wastes and produce urine."],
  ["Which part of the brain controls balance and coordination?", ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"], 1, "The cerebellum coordinates voluntary movements and maintains balance and posture."],
  ["Which part of the brain controls involuntary actions such as breathing and heartbeat?", ["Cerebrum", "Cerebellum", "Medulla oblongata", "Pituitary"], 2, "The medulla oblongata in the brainstem regulates vital involuntary functions."],
  ["Which organ produces insulin as well as digestive enzymes?", ["Liver", "Pancreas", "Kidney", "Spleen"], 1, "The pancreas has endocrine (insulin) and exocrine (digestive enzyme) functions."],
  ["Which organ is primarily responsible for detoxification of many substances in the body?", ["Heart", "Liver", "Lung", "Spleen"], 1, "The liver metabolises and detoxifies many drugs, toxins and metabolic products."],
  ["Which is the largest gland in the human body?", ["Pancreas", "Liver", "Thyroid", "Pituitary"], 1, "The liver is the largest gland in the human body."],
  ["Which organ stores urine before it is excreted?", ["Kidney", "Urinary bladder", "Ureter", "Urethra"], 1, "The urinary bladder temporarily stores urine produced by the kidneys."],
  ["The tube that carries urine from the kidney to the urinary bladder is called:", ["Urethra", "Ureter", "Nephron", "Renal artery"], 1, "Each ureter carries urine from a kidney to the bladder."],
  ["The tube through which urine passes out of the body is called:", ["Ureter", "Urethra", "Nephron", "Renal vein"], 1, "The urethra carries urine from the bladder to the outside."],
  ["Which part of the human eye controls the amount of light entering the eye?", ["Retina", "Cornea", "Iris", "Optic nerve"], 2, "The iris controls pupil size and thus the amount of light entering the eye."]
]);

addSection({ code: "BIO-PLT", subject: GS, category: "Biology", subtopic: "Plant Biology", source: SRC }, [
  ["Photosynthesis takes place mainly in which cell organelle?", ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"], 1, "Chloroplasts contain chlorophyll and are the main site of photosynthesis."],
  ["Which pigment is essential for photosynthesis?", ["Haemoglobin", "Chlorophyll", "Melanin", "Carotene only"], 1, "Chlorophyll absorbs the light energy required for photosynthesis."],
  ["Which gas is absorbed by green plants during photosynthesis?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], 2, "Plants absorb CO₂ and, with water, make carbohydrates."],
  ["Which part of a plant absorbs water and minerals from the soil?", ["Stem", "Root", "Leaf", "Flower"], 1, "Roots, particularly root hairs, absorb water and dissolved minerals."],
  ["Which tissue transports water from roots to other parts of a plant?", ["Phloem", "Xylem", "Cambium", "Epidermis"], 1, "Xylem carries water and minerals upward; phloem carries sugars and organic nutrients."]
]);

addSection({ code: "BIO-BRN", subject: GS, category: "Biology", subtopic: "Branches of Biology", source: SRC }, [
  ["The study of insects is called:", ["Emetology", "Entomology", "Astrology", "Geology"], 1, "Entomology is the branch of zoology that studies insects."],
  ["The study of birds is called:", ["Ornithology", "Herpetology", "Ichthyology", "Ecology"], 0, "Ornithology is the scientific study of birds."],
  ["The study of fishes is called:", ["Entomology", "Ichthyology", "Ornithology", "Cytology"], 1, "Ichthyology is the branch of zoology concerned with fishes."],
  ["The study of reptiles and amphibians is called:", ["Herpetology", "Entomology", "Mammalogy", "Ornithology"], 0, "Herpetology deals mainly with reptiles and amphibians."],
  ["The study of mammals is known as:", ["Mammalogy", "Mycology", "Cytology", "Ecology"], 0, "Mammalogy is the scientific study of mammals."],
  ["The study of fungi is called:", ["Botany", "Mycology", "Virology", "Bacteriology"], 1, "Mycology is the branch of biology concerned with fungi."],
  ["The study of algae is called:", ["Phycology", "Entomology", "Pomology", "Mycology"], 0, "Phycology (algology) is the study of algae."],
  ["The study of fruits is called:", ["Olericulture", "Pomology", "Floriculture", "Silviculture"], 1, "Pomology is the branch of horticulture dealing with fruits."],
  ["The study of vegetables is called:", ["Olericulture", "Pomology", "Floriculture", "Agronomy"], 0, "Olericulture deals with cultivation and study of vegetable crops."],
  ["The study of flowers and ornamental plants is called:", ["Pomology", "Floriculture", "Olericulture", "Mycology"], 1, "Floriculture is the cultivation and study of flowering and ornamental plants."]
]);

addSection({ code: "BIO-GEN", subject: GS, category: "Biology", subtopic: "Genetics", source: SRC }, [
  ["The study of heredity is called:", ["Genetics", "Ecology", "Anatomy", "Physiology"], 0, "Genetics is concerned with heredity and variation."],
  ["Who is known as the 'Father of Genetics'?", ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Robert Hooke"], 1, "Mendel established the fundamental laws of inheritance through pea-plant experiments."],
  ["The basic unit of heredity is:", ["Chromosome", "Gene", "Cell", "Nucleus"], 1, "A gene is a segment of DNA that contributes to a specific trait or function."],
  ["The genetic material in most living organisms is:", ["RNA", "DNA", "Protein", "Lipid"], 1, "DNA is the primary hereditary material in most organisms."],
  ["The full form of DNA is:", ["Deoxyribonucleic Acid", "Dioxyribonuclear Acid", "Deoxyribose Nitric Acid", "Double Nucleic Acid"], 0, "DNA stands for Deoxyribonucleic Acid."],
  ["The full form of RNA is:", ["Ribose Nucleic Acid", "Ribonucleic Acid", "Ribosomal Nitrogen Acid", "Reactive Nucleic Acid"], 1, "RNA stands for Ribonucleic Acid and plays roles in gene expression and protein synthesis."]
]);

addSection({ code: "BIO-CEL", subject: GS, category: "Biology", subtopic: "Cell Biology", source: SRC }, [
  ["Which organelle is known as the powerhouse of the cell?", ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], 1, "Mitochondria generate most of the cell's ATP through cellular respiration."],
  ["Which organelle is responsible for protein synthesis?", ["Ribosome", "Lysosome", "Golgi apparatus", "Vacuole"], 0, "Ribosomes are where proteins are synthesised."],
  ["Which organelle is known as the 'suicidal bag' of the cell?", ["Ribosome", "Lysosome", "Nucleus", "Chloroplast"], 1, "Lysosomes contain digestive enzymes that break down cellular waste and damaged components."],
  ["The control centre of a eukaryotic cell is:", ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"], 1, "The nucleus holds most of the cell's genetic material and regulates cellular activities."],
  ["Which structure controls the movement of substances into and out of a cell?", ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"], 1, "The plasma membrane is selectively permeable."],
  ["The cell wall of plants is mainly composed of:", ["Chitin", "Cellulose", "Glycogen", "Protein"], 1, "Plant cell walls are primarily cellulose."],
  ["Which substance forms the cell wall of fungi?", ["Cellulose", "Chitin", "Glycogen", "Starch"], 1, "Fungal cell walls are primarily chitin."]
]);

addSection({ code: "BIO-NUT", subject: GS, category: "Biology", subtopic: "Biomolecules & Nutrition", source: SRC }, [
  ["Which carbohydrate is known as animal starch?", ["Glucose", "Cellulose", "Glycogen", "Sucrose"], 2, "Glycogen is the main storage polysaccharide in animals, stored in liver and muscles."],
  ["The main storage carbohydrate in plants is:", ["Glycogen", "Starch", "Glucose", "Cellulose"], 1, "Plants store excess glucose mainly as starch."],
  ["Which carbohydrate is known as fruit sugar?", ["Glucose", "Fructose", "Sucrose", "Lactose"], 1, "Fructose occurs naturally in fruits and honey."],
  ["Which sugar is commonly known as milk sugar?", ["Glucose", "Fructose", "Lactose", "Sucrose"], 2, "Lactose is the principal sugar in milk."],
  ["Which sugar is commonly known as cane sugar?", ["Lactose", "Sucrose", "Fructose", "Maltose"], 1, "Sucrose is cane sugar and the main sugar in table sugar."],
  ["Which is the simplest form of carbohydrate?", ["Monosaccharide", "Disaccharide", "Polysaccharide", "Glycoprotein"], 0, "Monosaccharides such as glucose and fructose are the simplest carbohydrates."],
  ["Which nutrient is mainly responsible for body-building and tissue repair?", ["Carbohydrates", "Proteins", "Fats", "Vitamins"], 1, "Proteins are essential for growth, tissue repair, enzymes, hormones and structure."],
  ["The deficiency of protein in children may cause:", ["Scurvy", "Kwashiorkor", "Rickets", "Beriberi"], 1, "Kwashiorkor is a severe form of protein malnutrition affecting children."],
  ["Marasmus is mainly caused by:", ["Excess protein", "Severe deficiency of calories and protein", "Vitamin C deficiency", "Iodine deficiency"], 1, "Marasmus results from severe energy deficiency – inadequate calories and protein."],
  ["Which nutrient provides the highest energy per gram?", ["Carbohydrates", "Proteins", "Fats", "Vitamins"], 2, "Fats give about 9 kcal per gram, versus about 4 kcal for carbohydrates and proteins."]
]);

/* =============================== ECONOMY =============================== */

addSection({ code: "ECO-RBI", subject: GS, category: "Economy", subtopic: "RBI & Currency", source: SRC }, [
  ["The Reserve Bank of India was established in:", ["1930", "1935", "1947", "1949"], 1, "RBI began operations on 1 April 1935 under the RBI Act, 1934."],
  ["The Reserve Bank of India was nationalised in:", ["1947", "1948", "1949", "1950"], 2, "RBI was nationalised on 1 January 1949."],
  ["The headquarters of the Reserve Bank of India is located in:", ["New Delhi", "Kolkata", "Mumbai", "Chennai"], 2, "RBI's central office is in Mumbai, Maharashtra."],
  ["Who is known as the 'Banker's Bank' in India?", ["SBI", "RBI", "NABARD", "SEBI"], 1, "RBI provides banking facilities to commercial banks and regulates the banking system."],
  ["Which institution is known as the 'lender of last resort' in India?", ["SBI", "RBI", "SEBI", "NABARD"], 1, "RBI provides emergency liquidity to banks facing serious financial difficulties."],
  ["The one-rupee note in India is issued by:", ["RBI", "Ministry of Finance", "SBI", "NITI Aayog"], 1, "The one-rupee note is issued by the Government of India, unlike other notes issued by RBI."],
  ["Who issues ₹2 and above currency notes in India?", ["Ministry of Finance", "RBI", "SBI", "SEBI"], 1, "RBI issues most banknotes on behalf of the Government; the ₹1 note is issued by the Ministry of Finance."],
  ["The symbol of Indian Rupee is:", ["₹", "$", "£", "¥"], 0, "The ₹ symbol was officially adopted in 2010 and designed by D. Udaya Kumar."]
]);

addSection({ code: "ECO-REG", subject: GS, category: "Economy", subtopic: "Regulators & Institutions", source: SRC }, [
  ["Which institution regulates the securities market in India?", ["RBI", "SEBI", "NABARD", "IRDAI"], 1, "SEBI regulates India's securities and capital markets."],
  ["SEBI was established as a statutory body in:", ["1988", "1990", "1992", "1995"], 2, "SEBI was set up in 1988 and became statutory under the SEBI Act, 1992."],
  ["NABARD primarily deals with:", ["Foreign trade", "Agriculture and rural development", "Stock exchanges", "Insurance"], 1, "NABARD (National Bank for Agriculture and Rural Development) focuses on rural credit and development."],
  ["NABARD was established in:", ["1975", "1980", "1982", "1985"], 2, "NABARD was established on 12 July 1982."],
  ["SIDBI primarily provides support to:", ["Large multinational companies", "Small industries and MSMEs", "Foreign governments", "Insurance companies"], 1, "SIDBI (Small Industries Development Bank of India) finances the MSME sector."],
  ["SIDBI was established in:", ["1982", "1988", "1990", "1995"], 2, "SIDBI was established in April 1990 under an Act of Parliament."],
  ["Which institution regulates the insurance sector in India?", ["SEBI", "RBI", "IRDAI", "NABARD"], 2, "IRDAI regulates and develops India's insurance sector."],
  ["Which institution regulates pension funds in India?", ["PFRDA", "SEBI", "RBI", "NABARD"], 0, "PFRDA regulates India's pension sector."],
  ["Which of the following is a development financial institution?", ["NABARD", "SEBI", "RBI", "Election Commission"], 0, "NABARD is a specialised development financial institution focusing on agriculture and rural development."]
]);

addSection({ code: "ECO-BNK", subject: GS, category: "Economy", subtopic: "Banking History", source: SRC }, [
  ["The first Indian bank to be listed on the New York Stock Exchange (NYSE) was:", ["SBI", "ICICI", "Deutsche Bank", "HDFC"], 1, "ICICI Bank listed on the NYSE in 2000."],
  ["Which is the largest public sector bank in India?", ["Punjab National Bank", "Bank of Baroda", "State Bank of India", "Canara Bank"], 2, "SBI is India's largest public sector bank by assets and deposits."],
  ["The State Bank of India was formed in:", ["1949", "1950", "1955", "1969"], 2, "SBI was established in 1955 through the SBI Act, succeeding the Imperial Bank of India."],
  ["The Imperial Bank of India was converted into State Bank of India in:", ["1949", "1955", "1969", "1975"], 1, "The Imperial Bank was transformed into SBI in 1955."],
  ["The first major bank nationalisation in India took place in:", ["1955", "1969", "1975", "1980"], 1, "On 19 July 1969, 14 major commercial banks were nationalised."],
  ["How many major commercial banks were nationalised in 1969?", ["6", "10", "14", "20"], 2, "14 major commercial banks were nationalised in 1969."],
  ["In 1980, how many more major commercial banks were nationalised?", ["4", "5", "6", "8"], 2, "Six more banks were nationalised in 1980, bringing the total to 20."],
  ["Which committee recommended major banking sector reforms in 1991?", ["Kelkar Committee", "Narasimham Committee", "Sarkaria Committee", "Rangarajan Committee"], 1, "The Narasimham Committee recommended wide-ranging banking and financial sector reforms."]
]);

addSection({ code: "ECO-MON", subject: GS, category: "Economy", subtopic: "Monetary Policy", source: SRC }, [
  ["What is CRR?", ["Cash Reserve Ratio", "Credit Reserve Rate", "Capital Revenue Ratio", "Cash Revenue Rate"], 0, "CRR is the percentage of a bank's specified liabilities kept as cash reserves with the RBI."],
  ["What is SLR?", ["Statutory Liquidity Ratio", "Standard Lending Rate", "State Liquidity Reserve", "Statutory Lending Reserve"], 0, "SLR is the proportion of liabilities a bank must maintain in liquid assets such as government securities."],
  ["Which of the following is a quantitative monetary policy instrument?", ["CRR", "Moral suasion", "Credit rationing", "Selective credit control"], 0, "CRR, SLR, repo rate and reverse repo rate are quantitative tools."],
  ["Repo rate is the rate at which:", ["Banks lend to customers", "RBI lends to commercial banks against eligible securities", "Government lends to RBI", "Customers lend to banks"], 1, "The repo rate is a key policy rate used by RBI to influence short-term liquidity."],
  ["An increase in the repo rate generally tends to:", ["Make borrowing cheaper", "Reduce borrowing costs immediately", "Make borrowing more expensive", "Increase money supply automatically"], 2, "A higher repo rate raises banks' funding costs and can reduce credit demand, helping control inflation."],
  ["Reverse repo rate refers to the rate at which:", ["RBI borrows from commercial banks", "Banks borrow from customers", "Government borrows from RBI", "Customers borrow from banks"], 0, "Under the traditional definition, it is the rate at which RBI absorbs liquidity by borrowing from banks."]
]);

addSection({ code: "ECO-TAX", subject: GS, category: "Economy", subtopic: "Taxation & GST", source: SRC }, [
  ["Which of the following is a direct tax?", ["GST", "Customs duty", "Income tax", "Excise duty"], 2, "Income tax is imposed directly on, and borne by, the taxpayer."],
  ["GST stands for:", ["General Sales Tax", "Goods and Services Tax", "Government Service Tax", "Goods Supply Tax"], 1, "GST is a comprehensive indirect tax on the supply of goods and services."],
  ["GST was introduced in India on:", ["1 January 2016", "1 July 2017", "15 August 2017", "26 January 2018"], 1, "GST came into effect on 1 July 2017, replacing several central and state indirect taxes."],
  ["GST is primarily a:", ["Direct tax", "Indirect tax", "Wealth tax", "Corporate tax"], 1, "GST is collected by businesses but ultimately borne by consumers."],
  ["Which constitutional amendment introduced GST in India?", ["91st Amendment", "99th Amendment", "101st Amendment", "103rd Amendment"], 2, "The Constitution (101st Amendment) Act, 2016 provided the framework for GST."],
  ["Which body recommends GST rates and major GST policy matters?", ["Finance Commission", "GST Council", "RBI", "NITI Aayog"], 1, "The GST Council, set up under Article 279A, recommends rates, exemptions and other GST matters."],
  ["The Chairman of the GST Council is the:", ["RBI Governor", "Union Finance Minister", "Prime Minister", "Finance Secretary"], 1, "The Union Finance Minister is the Chairperson of the GST Council."]
]);

addSection({ code: "ECO-PLN", subject: GS, category: "Economy", subtopic: "Planning & NITI Aayog", source: SRC }, [
  ["Which organization replaced the Planning Commission?", ["Finance Commission", "NITI Aayog", "GST Council", "RBI"], 1, "NITI Aayog replaced the Planning Commission on 1 January 2015."],
  ["NITI Aayog stands for:", ["National Institution for Transforming India", "National Institute for Trade and Industry", "National Institution for Technology in India", "National Indian Transformation Authority"], 0, "NITI Aayog is the Government of India's premier public policy think tank."],
  ["The first Five-Year Plan in India started in:", ["1947", "1950", "1951", "1956"], 2, "The First Five-Year Plan began in 1951 with emphasis on agriculture, irrigation and rehabilitation."],
  ["The Second Five-Year Plan was based mainly on the:", ["Mahalanobis Model", "Harrod-Domar Model", "Gandhian Model", "Lewis Model"], 0, "It emphasised rapid industrialisation, particularly heavy industries, on the Mahalanobis strategy."],
  ["Which Five-Year Plan is associated with the slogan 'Garibi Hatao'?", ["Third Plan", "Fourth Plan", "Fifth Plan", "Sixth Plan"], 2, "The Fifth Plan (1974–79) focused on poverty alleviation and self-reliance."],
  ["Which organization publishes the World Development Report?", ["IMF", "World Bank", "WTO", "UNDP"], 1, "The World Bank publishes the annual World Development Report."]
]);

addSection({ code: "ECO-REV", subject: GS, category: "Economy", subtopic: "Agricultural Revolutions", source: SRC }, [
  ["The concept of 'Green Revolution' in India is mainly associated with:", ["Milk production", "Food-grain production", "Fish production", "Oilseed production"], 1, "It raised wheat and rice output via high-yielding varieties, irrigation and fertilizers."],
  ["Who is known as the 'Father of the Green Revolution in India'?", ["Norman Borlaug", "M. S. Swaminathan", "Verghese Kurien", "C. Subramaniam"], 1, "Dr. M. S. Swaminathan played a leading role in the Green Revolution in India."],
  ["The 'White Revolution' is associated with:", ["Wheat production", "Milk production", "Fish production", "Egg production"], 1, "The White Revolution (Operation Flood) transformed India's dairy sector."],
  ["Who is known as the 'Father of the White Revolution in India'?", ["M. S. Swaminathan", "Verghese Kurien", "Norman Borlaug", "Homi Bhabha"], 1, "Dr. Verghese Kurien played a key role in Operation Flood."],
  ["The 'Blue Revolution' is associated with:", ["Fisheries", "Milk", "Oilseeds", "Horticulture"], 0, "It refers to the expansion of India's fisheries and aquaculture."],
  ["The 'Golden Revolution' in India is mainly associated with:", ["Horticulture and honey production", "Coal production", "Petroleum production", "Steel production"], 0, "It covers horticulture, fruits, vegetables, floriculture, honey and related activities."]
]);

/* ============================== LITERATURE ============================== */

addSection({ code: "LIT-BKS", subject: "Static GK", category: "Literature", subtopic: "Books & Authors", source: SRC }, [
  ["Who is the author of the book 'From Volga to Ganga'?", ["Bibhutibhushan Bandopadhyay", "Ruskin Bond", "Jerome K. Jerome", "Rahul Sankrityayan"], 3, "'Volga Se Ganga' is a famous Hindi work by Rahul Sankrityayan, with stories tracing human society's evolution."],
  ["Who wrote 'Godan'?", ["Premchand", "Harivansh Rai Bachchan", "Jaishankar Prasad", "Maithili Sharan Gupt"], 0, "Godan is one of the most famous Hindi novels, by Munshi Premchand, on rural poverty and exploitation."],
  ["Who wrote 'Gitanjali'?", ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Kazi Nazrul Islam"], 1, "Gitanjali is Tagore's celebrated poetry collection; its English translation helped him win the 1913 Nobel Prize in Literature."],
  ["Who wrote 'Anandamath'?", ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarat Chandra Chattopadhyay", "Ishwar Chandra Vidyasagar"], 1, "Anandamath was written by Bankim Chandra Chattopadhyay; the song 'Vande Mataram' appears in it."]
]);

/* ---------------------------------------------------------------------
   ADD YOUR NEW BLOCKS BELOW THIS LINE  (copy any block above and edit)
   --------------------------------------------------------------------- */
