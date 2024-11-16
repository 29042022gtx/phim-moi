import { Movie } from '../entities/Movie';
const dataMovieList: Movie[] = [
  {
    ID: 'mo01',
    name: 'Inception',
    duration: 125,
    nation: 'Mỹ',
    certificate: 'T13',
    producerList: ['Warner Bros'],
    date: '2010-05-02',
    imgURL: '/assets/img/movies/inception.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hành động', 'Giả tưởng'],
    directorList: ['Christopher Nolan'],
    castList: [
      'Leonardo DiCaprio',
      'Joseph Gordon-Levitt',
      'Michael Caine',
      'Marion Cotillard',
    ],
    description:
      'Một tổ chức tội phạm chuyên nghiệp, với khả năng xâm nhập vào tiềm thức của người khác thông qua giấc mơ để thực hiện nhiều phi vụ đánh cắp thông tin của họ. Một trong những nhiệm vụ khó khăn nhất chính là việc gieo rắc một luồng suy nghĩ mới vào tiềm thức con người để tạo nên dữ liệu ký ức giả.',
    view: 2402455,
    commentList: [
      {
        username: 'user01',
        date: '2010-08-06',
        score: 4,
        content: 'Phim hay, xây dựng thế giới, nhân vật tốt',
      },
      {
        username: 'user02',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user03',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user04',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user05',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user06',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user07',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user08',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user09',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user10',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user11',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
      {
        username: 'user12',
        date: '2010-08-12',
        score: 5,
        content: 'Bộ phim xuất sắc nhất năm',
      },
    ],
  },
  {
    ID: 'mo02',
    name: 'Sói Bảnh',
    duration: 80,
    date: '2024-08-20',
    nation: 'Úc',
    certificate: 'P',
    producerList: ['Flying Bark Productions'],
    imgURL: '/assets/img/movies/soi-banh.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hoạt hình', 'Phiêu lưu'],
    directorList: ['Alexs Staderman'],
    castList: ['Ilai Swindells', 'Elizabeth Nabben', 'Jennifer Saunders'],
    description:
      'Sói bảnh kể về Freddy thuộc một gia đình người sói và cần chứng tỏ bản thân để được các bậc trưởng lão công nhận. Tình cờ phát hiện ra những cổ ngữ xưa, cậu vô tình triệu hồi sức mạnh từ một tiên nguyệt nghịch ngợm tên là Moopoo. Giờ đây, Freddy phải giúp Moopoo trở về mặt trăng và khôi phục trật tự vũ trụ',
    view: 483395,
    commentList: [
      {
        username: 'user01',
        date: '2024-08-25',
        score: 4,
        content: 'Cốt truyện độc đáo và hài hước',
      },
      {
        username: 'user02',
        date: '2024-09-03',
        score: 4,
        content: 'Hình ảnh và thiết kế đẹp mắt',
      },
    ],
  },
  {
    ID: 'mo03',
    name: 'Phi Công',
    duration: 93,
    date: '2024-03-19',
    nation: 'Hàn Quốc',
    certificate: 'T13',
    producerList: ['Lotte Entertainment'],
    imgURL: '/assets/img/movies/phi-cong.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Tình cảm', 'Hài hước'],
    directorList: ['Kim Han Gyul'],
    castList: ['Jo Jung Suk', 'Han Sun Hwa', 'Lee Joo Myung'],
    description:
      'Từ đỉnh cao danh vọng, hào quang cơ trưởng của Han Jung Woo (Jo Jung Suk) tắt ngỏm khi dính vào những thị phi công sở. Đứng trước thị trường tuyển dụng khó khăn, Han Jung Woo quyết định "nhập vai" em gái, ứng tuyển "nữ phi công" với hi vọng lấy lại những gì đã mất!',
    view: 664839,
    commentList: [
      {
        username: 'user01',
        date: '2024-03-20',
        score: 4,
        content: 'Cảnh chiến đấu trong không trung rất ấn tượng',
      },
      {
        username: 'user02',
        date: '2024-03-22',
        score: 3,
        content: 'Bộ phim khám phá các yếu tố nhân văn',
      },
    ],
  },
  {
    ID: 'mo04',
    name: 'Minions',
    duration: 103,
    date: '2024-08-28',
    nation: 'Mỹ',
    certificate: 'P',
    producerList: ['Universal Pictures'],
    imgURL: '/assets/img/movies/minions.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hoạt hình', 'Hài hước'],
    directorList: ['Chris Renaud'],
    castList: ['Steve Carell', 'Kristen Wiig', 'Joey King'],
    description:
      'Cả gia đình Gru và các Minion đều có những lúc "ngốc nghếch hết mức" nhưng lại có thể hoàn thành những nhiệm vụ không tưởng. Bố Gru hiền lành, ba cô con gái đáng yêu cùng cậu con trai tinh nghịch, cùng với lũ Minion tinh quái, tạo nên một "gia đình" hài hước và độc đáo nhất màn ảnh!',
    view: 235763,
    commentList: [
      {
        username: 'user02',
        date: '2024-08-30',
        score: 4,
        content: 'Nhân vật dễ thương, hài hước và đáng yêu',
      },
      {
        username: 'user01',
        date: '2024-09-05',
        score: 5,
        content: 'Hài hước phù hợp với mọi lứa tuổi',
      },
    ],
  },
  {
    ID: 'mo05',
    name: 'Venom',
    duration: 85,
    date: '2020-08-20',
    nation: 'Mỹ',
    certificate: 'K',
    producerList: ['Columbia Pictures'],
    imgURL: '/assets/img/movies/venom.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hành động', 'Tình cảm'],
    directorList: ['Kelly Marcel'],
    castList: ['Tom Hardy', 'Juno Temple', 'Chiwetel Ejiofor'],
    description:
      'Sau chuyến du lịch ngắn sang quê nhà của Spider-Man: No Way Home (2021), Eddie Brock (Tom Hardy) giờ đây cùng Venom “hành hiệp trượng nghĩa” và “nhai đầu” hết đám tội phạm trong thành phố. Tuy nhiên, đi đêm lắm cũng có ngày gặp ma, chính phủ Mỹ đã phát hiện ra sự tồn tại của con quái vật ngoài hành tinh này.',
    view: 524737,
    commentList: [
      {
        username: 'user02',
        date: '2020-08-26',
        score: 5,
        content: 'Một bộ phim giải trí tuyệt',
      },
      {
        username: 'user01',
        date: '2020-09-18',
        score: 3,
        content: 'Nhiều phân cảnh hành động mãn nhãn',
      },
    ],
  },
  {
    ID: 'mo06',
    name: 'Bố gà',
    duration: 91,
    date: '2023-03-27',
    nation: 'Mexico',
    certificate: 'T13',
    producerList: ['Huevocartoon Producciones'],
    imgURL: '/assets/img/movies/bo-ga.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hoạt hình', 'Hài hước'],
    directorList: ['Gabriel Alatriste', 'Rodolfo Alatriste'],
    castList: ['Maite Perroni', 'Angélica Vale', 'Vadhir Derbez'],
    description:
      'Bố gà siêu đẳng xoay quanh cuộc hành trình trở về Nam Cực của một chú gấu con và đàn chim cánh cụt. Bị chủ rạp xiếc xấu xa truy đuổi, gấu con nhận được sự giúp đỡ nhiệt tình từ bố gà cùng nhà trứng để có thể vượt qua mọi thử thách khó nhằn và đoàn tụ với gia đình.',
    view: 524877,
    commentList: [
      {
        username: 'user02',
        date: '2023-04-02',
        score: 5,
        content: 'Câu chuyện dễ hiểu nhưng đầy ý nghĩa',
      },
      {
        username: 'user01',
        date: '2023-04-07',
        score: 4,
        content: 'Một bộ phim hoạt hình vui nhộn và dễ thương',
      },
    ],
  },
  {
    ID: 'mo07',
    name: 'Minecraft',
    duration: 107,
    date: '2024-07-13',
    nation: 'Mỹ',
    certificate: 'K',
    producerList: ['Warner Bros'],
    imgURL: '/assets/img/movies/minecraft.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hành động', 'Giả tưởng'],
    directorList: ['Jared Hess'],
    castList: ['Jack Black', 'Jason Momoa', 'Emma Myers'],
    description:
      'Chào mừng bạn đến với thế giới của Minecraft, nơi sự sáng tạo không chỉ giúp bạn chế tạo mà còn là yếu tố quan trọng để sống sót! Bốn kẻ lạc lõng - Garrett “The Garbage Man” Garrison (Momoa), Henry (Hansen), Natalie (Myers) và Dawn (Brooks) - bất ngờ gặp rắc rối khi họ bị kéo qua cánh cửa bí ẩn dẫn đến Overworld',
    view: 463526,
    commentList: [
      {
        username: 'user02',
        date: '2024-07-15',
        score: 4,
        content: 'Thế giới mở rộng lớn và đầy màu sắc',
      },
      {
        username: 'user01',
        date: '2024-07-21',
        score: 4,
        content: 'Câu chuyện hấp dẫn, đầy sáng tạo',
      },
    ],
  },
  {
    ID: 'mo08',
    name: 'Sonic',
    duration: 73,
    date: '2024-02-17',
    nation: 'Nhật Bản',
    certificate: 'T13',
    producerList: ['Paramount Pictures'],
    imgURL: '/assets/img/movies/sonic.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hoạt hình', 'Phiêu lưu'],
    directorList: ['Jeff Fowler'],
    castList: [
      'Ben Schwartz',
      'James Marsden',
      'Jim Carrey',
      'Keanu Reeves',
      'Idris Elba',
    ],
    description:
      'Sonic xảy ra khi Sonic, Knuckles và Tails phải đối mặt với một kẻ thù mới cức kì mạnh mẽ là Shadow - một nhân vật phản diện bí ẩn với sức mạnh không giống bất kỳ đối thủ nào họ từng đối mặt trước đây. Bị áp đảo về năng lực, Sonic phải lên đường thành lập một liên minh to lớn hơn.',
    view: 349252,
    commentList: [
      {
        username: 'user02',
        date: '2024-02-23',
        score: 4,
        content: 'Cực kỳ vui nhộn và đầy năng lượng',
      },
      {
        username: 'user01',
        date: '2024-02-25',
        score: 5,
        content: 'Hành động nhanh như chớp, hiệu ứng ấn tượng',
      },
    ],
  },
  {
    ID: 'mo09',
    name: 'Red One',
    duration: 82,
    date: '2024-04-07',
    nation: 'Mỹ',
    certificate: 'T13',
    producerList: ['Amazon Studios'],
    imgURL: '/assets/img/movies/red-one.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hành động', 'Hài hước'],
    directorList: ['Jake Kasdan'],
    castList: ['Dwayne Johnson', 'Chris Evans', 'Lucy Liu', 'J.K. Simmons'],
    description:
      'Sau khi Ông già Noel (mật danh: Red One) bị bắt cóc, Trưởng An ninh Bắc Cực (Dwayne Johnson) phải hợp tác với thợ săn tiền thưởng khét tiếng nhất thế giới (Chris Evans) trong một nhiệm vụ kịch tính xuyên lục địa để giải cứu Giáng Sinh.',
    view: 409823,
    commentList: [
      {
        username: 'user02',
        date: '2024-04-30',
        score: 5,
        content: 'Hành động hấp dẫn, hài hước và kịch tính',
      },
      {
        username: 'user01',
        date: '2024-05-06',
        score: 3,
        content: 'Bộ phim rất đáng xem và cực kỳ vui nhộn',
      },
    ],
  },
  {
    ID: 'mo10',
    name: 'Điệp Vụ',
    duration: 97,
    date: '2024-01-05',
    nation: 'Mỹ',
    certificate: 'T16',
    producerList: ['Millennium Flims'],
    imgURL: '/assets/img/movies/diep-vu.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hành động', 'Giật gân'],
    directorList: ['Renny Harlin'],
    castList: ['Aaron Eckhart', 'Nina Dobrev'],
    description:
      'CIA bị tống tiền bởi một kẻ điên cuồng. Hắn ám sát các nhà báo ngoại quốc và khiến cho tổ chức tình báo Mỹ rơi vào thế chịu trách nhiệm. Thế giới cùng nhau chỉ trích và chống lại Mỹ khiến CIA buộc phải kéo đặc vụ xuất sắc và nổi loạn nhất trở lại. Gã điệp viên sắp về hưu buộc phải đối mặt với bóng ma quá khứ và đối đầu với âm mưu xuyên quốc gia.',
    view: 198436,
    commentList: [
      {
        username: 'user02',
        date: '2024-01-08',
        score: 4,
        content: 'Hành động kịch tính, gay cấn',
      },
      {
        username: 'user01',
        date: '2024-01-13',
        score: 5,
        content: 'Câu chuyện vừa lôi cuốn vừa căng thẳng',
      },
    ],
  },
  {
    ID: 'mo11',
    name: 'Mad Max',
    duration: 108,
    date: '2024-05-22',
    nation: 'Úc',
    certificate: 'T16',
    producerList: ['Warner Bros'],
    imgURL: '/assets/img/movies/mad-max.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hành động', 'Phiêu lưu'],
    directorList: ['George Miller'],
    castList: ['Anya Taylor-Joy', 'Chris Hemsworth', 'Tom Burke'],
    description:
      'Furiosa: A Mad Max Saga xảy ra trước những sự kiện của Mad Max: Fury Road, câu chuyện kể về thời trẻ của nữ chiến binh Furiosa khi cô bị tách ra khỏi nơi ẩn náu ở Green Place of Many Mothers và lần đầu tiên buộc phải đối mặt với sự điên rồ của thế giới bên ngoài. Nhưng cô ấy luôn nuôi trong mình một khát vọng “trở về đất mẹ” mãnh liệt.',
    view: 208347,
    commentList: [
      {
        username: 'user02',
        date: '2024-05-23',
        score: 3,
        content: 'Bộ phim hành động cực kỳ mãn nhãn',
      },
      {
        username: 'user01',
        date: '2024-05-26',
        score: 5,
        content: 'Cảnh quay hoành tráng, ấn tượng',
      },
    ],
  },
  {
    ID: 'mo12',
    name: 'Ngày Yêu',
    duration: 86,
    date: '2024-11-13',
    nation: 'Nhật Bản',
    certificate: 'T16',
    producerList: ['Studio Canal'],
    imgURL: '/assets/img/movies/ngay-yeu.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Tình cảm', 'Lãng mạn'],
    directorList: ['John Crowley'],
    castList: ['Andrew Garfield', 'Florence Pugh'],
    description:
      'Định mệnh đã đưa một nữ đầu bếp đầy triển vọng và một người đàn ông vừa trải qua hôn nhân đổ vỡ đến với nhau trong tình cảnh đặc biệt. Bộ phim là cuộc tình mười năm sâu đậm của cặp đôi này, từ lúc họ rơi vào lưới tình, xây dựng tổ ấm, cho đến khi một biến cố xảy đến thay đổi hoàn toàn cuộc đời họ.',
    view: 198423,
    commentList: [
      {
        username: 'user02',
        date: '2024-11-16',
        score: 3,
        content: 'Câu chuyện nhẹ nhàng nhưng sâu sắc',
      },
      {
        username: 'user01',
        date: '2024-11-19',
        score: 4,
        content: 'Bộ phim dễ thương và đầy cảm xúc',
      },
    ],
  },
  {
    ID: 'mo13',
    name: 'Học Yêu',
    duration: 79,
    date: '2024-11-08',
    nation: 'Mỹ',
    certificate: 'T16',
    producerList: ['Kevin Downes Productions'],
    imgURL: '/assets/img/movies/hoc-yeu.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Tình cảm', 'Tâm lí'],
    directorList: ['E. Oni'],
    castList: ['Kim Go Eun', 'Steve Sanghyun Noh'],
    description:
      'Đôi Bạn Học Yêu là bộ phim kể về Jae-hee (Kim Go-eun) - một cô gái tự do, phóng khoáng, không quan tâm người khác nghĩ gì về mình và Heung-soo - một chàng trai tự cô lập mình ra khỏi thế giới bởi một bí mật không thể tiết lộ. Khi Jae-hee tình cờ phát hiện ra điều thầm kín của Heung-soo, cả hai đã hình thành nên một mối quan hệ không tưởng với cuộc sống chung đầy màu sắc.',
    view: 126208,
    commentList: [],
  },
  {
    ID: 'mo14',
    name: 'Giáng Sinh',
    duration: 84,
    date: '2024-12-06',
    nation: 'Mỹ',
    certificate: 'T16',
    producerList: ['Calamity Films'],
    imgURL: '/assets/img/movies/giang-sinh.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Tình cảm', 'Hài hước'],
    directorList: ['Paul Feig'],
    castList: ['Emilia Clarke', 'Henry Golding'],
    description:
      'Một cô gái luôn gặp rắc rối trong cuộc sống với nhiều quyết định sai lầm chuẩn bị bước vào mùa lễ Giáng sinh an lành khi gặp được chàng trai của đời mình.',
    view: 104723,
    commentList: [],
  },
  {
    ID: 'mo15',
    name: 'Rừng Xanh',
    duration: 78,
    date: '2024-11-15',
    nation: 'Mỹ',
    certificate: 'P',
    producerList: ['Appian Way'],
    imgURL: '/assets/img/movies/rung-xanh.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hoạt hình', 'Hài hước'],
    directorList: ['Tim Harper'],
    castList: ['Amandla Stenberg', 'Djimon Hounsou', 'Dean-Charles Chapman'],
    description:
      'Bộ phim kể về nhân vật Ozi là một cô bé đười ươi đáng yêu nhưng không may mất cả Bố lẫn Mẹ trong một vụ cháy rừng thương tâm. Được cứu sống và nuôi trong trại mồ côi dành cho đười ươi, Ozi rất gần gũi con người. Tưởng chừng như đã dần quen với cuộc sống mới nhưng rồi một ngày, bất ngờ phát hiện ra Bố Mẹ mình vẫn còn sống. Liệu hành trình trở lại rừng xanh, quay về với gia đình có như những gì Ozi tưởng tượng?',
    view: 148356,
    commentList: [],
  },
  {
    ID: 'mo16',
    name: 'Hoang Dã',
    duration: 96,
    date: '2024-10-11',
    nation: 'Mỹ',
    certificate: 'K',
    producerList: ['DreamWorks'],
    imgURL: '/assets/img/movies/hoang-da.jpg',
    trailerURL: '/assets/img/MyHien/trailer1.mp4',
    categoryList: ['Hoạt hình', 'Giả tưởng'],
    directorList: ['Chris Sanders'],
    castList: ['Lupita Nyong', 'Pedro Pascal', 'Catherine Ohara'],
    description:
      'Cuộc phiêu lưu hoành tráng theo chân hành trình của một robot — đơn vị ROZZUM 7134, gọi tắt là Roz. Roz vô tình dạt vào hoang đảo sau một sự cố và nơi đây trở thành địa điểm sống mới của cô. Tại đây, Roz kết thân và nhận nuôi một chú ngỗng con, đặt tên là Brightbill. Roz và Brightbill dần dần thân thiết với các bạn thú trên đảo, song sau đó phải chống chọi, bảo vệ “nhà mới” trước sự xâm lăng của nhà máy từng sản xuất ra Roz.',
    view: 183042,
    commentList: [],
  },
];
export default dataMovieList;
