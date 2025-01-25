
from XLSXTOXML import xlsx_to_xml

xml_dom = xlsx_to_xml("C:\\Users\\MC DESMOND\\dextop\\Business\\sco\\Scolarite\\Api\\src\\Complied Economics 2000-2023.xlsx")
rows = xml_dom.getElementsByTagName("Row")
questions = []
for i in rows:
    question = i.getElementsByTagName("Cell")[5]
    if question.firstChild:
        questions.append(str(question.firstChild.data))
open("q.xml","w").write("\n\n".join(questions)) 