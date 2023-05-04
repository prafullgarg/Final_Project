# Lex Rank:
# This is an unsupervised machine learning based approach in which we use the textrank approach to find the summary of our sentences. Using cosine similarity and vector based algorithms, we find minimum cosine distance among various words and store the more similar words together.

from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lex_rank import LexRankSummarizer
def sumy_method(text):
    parser = PlaintextParser.from_string(text, Tokenizer("english"))
    summarizer = LexRankSummarizer()
    #Summarize the document with 2 sentences
    summary = summarizer(parser.document, 8)
    dp = []
    for i in summary:
        lp = str(i)
        dp.append(lp)
        final_sentence = ' '.join(dp)
    return final_sentence



text = """ 
The plaintiff, predecessor in interest of the appellants, flied a suit for a declaration and an injunction to restrain the defendant respondents from dispossessing him from a certain property comprising of a coconut grove.
The trial court dismissed the suit holding that the, plaintiff was no more in possession of the suit property, and, therefore, a suit for a mere declaration simplicitor could not lie.
Consequently, the plaintiff flied another suit for restoration of possession.
His case was that he was a tenant of the suit property, whereof defendant No. 2 was the owners ' and 1016 that he was forcibly dispossessed by defendant No. 1, in collusion with defendant No. 2, without his tenancy having been lawfully terminated.
It was alleged that the defendants were trespassers and liable to be evicted.
The defendants, besides raising the pleas of res judicata and/or constructive res judicata purported to be based on Order 2 Rule 2(3) of the Code of Civil Procedure, contended that defendant No. 1 was in lawful possession of the suit property as the same was let out to him by defendant No. 2 after the lease in favour of the plaintiff stood terminated by efflux of time, and the suit, as such, was not maintainable.
The trial court decreed the suit holding that the suit property was demised to the plaintiff as he was the lawful tenant thereof, and defendant No. 1 in collusion with defendant No. 2 wrongfully dispossessed him.
The appeal riled by the defendants was dismissed by the first appellate court.
The second appeals filed by the defendants were allowed by the High Court holding that the suit was barred by res judicata as well as Order 2 Rule 2(3) C.P.C.
The High Court also held that during the pendency of the suit as a result of the amendment of the Goa, Daman and Diu Agricultural Tenancy Act, 1964 by Act 17 of 1976, known as the Fifth Amendment, the definition of 'agriculture ' was changed and the suit property came to be covered within the expression 'agricultural land ' which rendered the civil court without jurisdiction and the decree passed by it unsustainable.
Aggrieved, the heirs and legal representatives of the plaintiff, filed the appeal by special leave.
Allowing the appeal, this Court, HELD: 1.1 A subsequent suit would be barred by res judicata only when the subject matter of the suit was directly and substantially in issue in the previous suit.
[p. 1022 C] 1.2.
The first suit was dismissed on a technical ground that the suit for a mere declaration without seeking consequential relief of possession could not lie.
In that suit the issue regarding the status of the plaintiff as a lessee was not settled once for all and hence that issue could not be stated to be barred by res judicata in the subsequent suit brought by the lessee for possession of the demised property.
The High Court was not right in holding 1017 that the second suit was barred by res judicata.
1022 F H] 2.1.
Order 2 Rule 2 CPC is based on,the salutory principle that a defendant or defendants should not be twice vexed for the same cause by splitting the claim and the reliefs.
It does not preclude a second suit based.
on a distinct cause of action.
[p. 1023 C E] 2.2.
The doctrine of res judicata differs from the rule embodied In Order 2 Rule 2, in that, the former places emphasis on the plaintiff 's duty to exhaust all available grounds in support of his claim while the latter requires the plaintiff to claim all reliefs emanating from the same cause of action.
[p. 1023 E] 2.3.
The cause of action for the former suit was based on an apprehension that the defendants were likely to forcibly dispossess the plaintiff.
The suit was for an injunction and not for possession of the demised property.
It was not on the premise that the plaintiff had in fact been illegally and forcibly dispossessed and needed the court 's assistance to be restored to possession.
Therefore, the subsequent suit was based on a distinct cause of action not found in the former suit.
The High Court was not right in concluding that the suit was barred by Order 2 Role 2(3) of the Code of Civil Procedure, and that the difference in the reliefs claimed in the two suits was immaterial and irrelevant.
In the previous suit, the relief for possession was not claimed whereas in the second suit the relief was for restoration of possession.
That makes all the difference.
[pp. 1023 F, 1024 B D] 3.1.
The impact of the Fifth Amendment on pending litigation is that the question of tenancy in regard to agricultural land cannot be decided by the civil court under the Act and there being no express saying clause permitting the civil court to decide the same, any decision rendered by the civil court would be without jurisdiction.
The change in law deprived the civil court of jurisdiction which it undoubtedly possessed on the date of the institution of the suit.
Thus, the provisions of the Fifth Amendment would apply to pending suits also.
[pp. 1027 D E; 1028 D E; 1029 C] Shah Bhojraj Kuverji Oil Mills and Ginning Factory vs Subhash Chandra Yograj Sinha; , , relied on.
The Act does not preclude the institution of a suit by a tenant 1018 for restoration of possession from a trespasser.
[p. 1029 C] 3.3.
If a suit Is riled to recover possession of agricultural land from a trespasser and no dispute arises, the adjudication whereof is required to be done by the special machinery set up under the Act, the civil court will continue to have jurisdiction.
[p. 1027 F G] 3A.
If possession of agricultural land is sought on the plea that the defendant is a trespasser and the defendant contends that he is a tenant, the claim of tenancy by defendant cannot be gone into by the civil court in view of the clear language of S.7 read with section 58(2) of the Act In such a situation, it would not stand to reason to non suit the plaintiff who had flied the suit in a competent court having jurisdiction to try the same, merely because of the subsequent change in law.
The proper course, therefore, would be that the issue whether the defendant was a tenant should be referred to the Mamlatdar for decision and, after his decision is received by the civil court, if the issue is held against the defendant, the civil court may consider passing of a. decree.
for eviction but if, on the other hand, he is held to be a tenant, the civil court may be required to dismiss the suit [pp. 1029 F H; 1030 A B; 1031 D E] Bhimaji Shankar Kulkam vs Dundappa Vithappa Udapudi & Anr., ; =. ; and Dhondi Tukaram vs Hari Dadu, AIR 1954 Bom.
100 = ILR , relied on.
The impact of Fifth Amendment may give rise to a situation where a deemed tenant under s.4 of the Act is evicted from the land on or after 1st July, 1962; his remedy under s.8(2) is to approach the authority under the Act for recovery of possession of the land of which he has been disposed, and jurisdiction of the civil court stands wholly barred by virtue of s.58(2) of the Act as it would not be competent to pass any order for restoration of possession to the deemed tenant.
If such a situation arises in a pending suit which was instituted in a competent court having jurisdiction at the date of its institution, it would be unfair to non suit the plaintiff altogether for no fault of his own and the proper course would be to follow in spirit the procedure outlined in Order 7, Rules 10 and 10A, C.P.C. [pp. 1031 F H; 1032 A B] 4.
The High Court lacked jurisdiction to decide the question regarding tenancy on merits.
Its order is set aside and the matter is remitted to 1019 the trial court to determine the course of action to be adopted in accordance with the guideline indicated hereinabove.
[p. 1032 D F]
 """


sumy_method(text)
