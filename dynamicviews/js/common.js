(function(undefined) {
	var h = "",
		aa = "\n",
		ba = "\n\n",
		m = " ",
		ca = " comment",
		ea = " days ago",
		fa = " does not exist on jQuery.particles",
		ga = " does not exist on jQuery.spritle",
		ha = " hours ago",
		ia = " minutes ago",
		ja = " rotate(",
		ka = " rotateZ(",
		la = " weeks ago",
		ma = " | ",
		qa = "!",
		ra = '"',
		sa = '" frameborder="0" allowfullscreen></iframe>',
		ta = '" rel="stylesheet" type="text/css">',
		ua = '">',
		va = '"Helvetica Neue Light", HelveticaNeue-Light, "Helvetica Neue", Helvetica, Arial, sans-serif',
		wa = '"]',
		xa = "#",
		ya = "#!",
		za = "#000000",
		Aa = "#000080",
		Ba = "#00008b",
		Ca = "#0000cd",
		Da = "#0000ff",
		Ea = "#006400",
		Fa = "#008000",
		Ga = "#008080",
		Ia = "#008b8b",
		Ja = "#009eb8",
		Ka = "#00bfff",
		La = "#00ced1",
		Ma = "#00fa9a",
		Na = "#00ff00",
		Oa = "#00ff7f",
		Pa = "#00ffff",
		Qa = "#191970",
		Ra = "#1e90ff",
		Sa = "#20b2aa",
		Ta = "#228b22",
		Ua = "#2e8b57",
		Va = "#2f4f4f",
		Wa = "#32cd32",
		Xa = "#333",
		Ya = "#3cb371",
		Za = "#40e0d0",
		$a = "#4169e1",
		ab = "#4682b4",
		bb = "#483d8b",
		cb = "#48d1cc",
		db = "#4b0082",
		eb = "#555",
		fb = "#556b2f",
		gb = "#5f9ea0",
		hb = "#6495ed",
		ib = "#666",
		jb = "#66cdaa",
		kb = "#696969",
		lb = "#6a5acd",
		mb = "#6b8e23",
		nb = "#708090",
		ob = "#778899",
		pb =
		"#7b68ee",
		qb = "#7cfc00",
		rb = "#7fff00",
		sb = "#7fffd4",
		tb = "#800000",
		vb = "#800080",
		wb = "#808000",
		xb = "#808080",
		yb = "#87ceeb",
		zb = "#87cefa",
		Ab = "#8a2be2",
		Bb = "#8b0000",
		Cb = "#8b008b",
		Db = "#8b4513",
		Eb = "#8fbc8f",
		Fb = "#90ee90",
		Gb = "#9370db",
		Hb = "#9400d3",
		Ib = "#98fb98",
		Jb = "#9932cc",
		Kb = "#9acd32",
		Lb = "#a0522d",
		Mb = "#a52a2a",
		Nb = "#a9a9a9",
		Ob = "#ad3a2b",
		Pb = "#add8e6",
		Qb = "#adff2f",
		Rb = "#afeeee",
		Sb = "#b0c4de",
		Tb = "#b0e0e6",
		Ub = "#b22222",
		Vb = "#b8860b",
		Wb = "#ba55d3",
		Xb = "#bc8f8f",
		Yb = "#bdb76b",
		Zb = "#c0c0c0",
		$b = "#c71585",
		ac = "#cd5c5c",
		bc = "#cd853f",
		cc = "#d2691e",
		dc = "#d2b48c",
		ec = "#d3d3d3",
		fc = "#d8bfd8",
		gc = "#da70d6",
		hc = "#daa520",
		ic = "#db7093",
		jc = "#dc143c",
		kc = "#dcdcdc",
		lc = "#dda0dd",
		mc = "#deb887",
		nc = "#e0ffff",
		oc = "#e6e6fa",
		pc = "#e9967a",
		qc = "#editor-frame",
		rc = "#editor-frame .editor-apply",
		sc = "#editor-frame .editor-control",
		tc = "#editor-frame .editor-editor",
		uc = "#editor-frame .editor-list .reset",
		vc = "#editor-frame .editor-list .template",
		wc = "#editor-frame .editor-panel",
		xc = '#editor-frame .template[data-template="',
		yc = "#ee82ee",
		zc = "#eee",
		Ac = "#eee8aa",
		Bc =
		"#f08080",
		Cc = "#f0e68c",
		Dc = "#f0f8ff",
		Ec = "#f0fff0",
		Fc = "#f0ffff",
		Gc = "#f3f3f3",
		Hc = "#f4a460",
		Ic = "#f5deb3",
		Jc = "#f5f5dc",
		Kc = "#f5f5f5",
		Lc = "#f5fffa",
		Mc = "#f8f8ff",
		Nc = "#fa8072",
		Oc = "#faebd7",
		Pc = "#faf0e6",
		Qc = "#fafad2",
		Rc = "#fdf5e6",
		Sc = "#ff0000",
		Tc = "#ff00ff",
		Uc = "#ff1493",
		Vc = "#ff4500",
		Wc = "#ff6347",
		Yc = "#ff69b4",
		Zc = "#ff7f50",
		$c = "#ff8c00",
		ad = "#ffa07a",
		bd = "#ffa500",
		cd = "#ffb6c1",
		dd = "#ffc0cb",
		ed = "#ffd700",
		fd = "#ffdab9",
		gd = "#ffdead",
		hd = "#ffe4b5",
		id = "#ffe4c4",
		jd = "#ffe4e1",
		kd = "#ffebcd",
		ld = "#ffefd5",
		md = "#fff0f5",
		nd = "#fff5ee",
		od = "#fff8dc",
		pd = "#fffacd",
		qd = "#fffaf0",
		rd = "#fffafa",
		sd = "#ffff00",
		td = "#ffffe0",
		ud = "#fffff0",
		vd = "#ffffff",
		wd = "#gadget-dock",
		xd = "#injected-iframe",
		yd = "#lightbox",
		t = "#nyanyanya",
		zd = "#overview",
		Ad = "#overview .overview-panel.current",
		Bd = "#search",
		Cd = "$1",
		Dd = "$2",
		Ed = "$3",
		Fd = "%",
		Gd = "%27",
		Hd = "&",
		Id = "&#034;",
		Jd = "&#039;",
		Kd = "&#39;",
		Ld = "&#96;",
		Md = "&action=",
		Nd = "&amp;",
		Od = "&apa=1",
		Pd = "&count=",
		Qd = "&gt;",
		Rd = "&it=",
		Sd = "&lt;",
		Td = "&npn=1",
		Ud = "&npnv=",
		Vd = "&p=s",
		Wd = "&parentID=",
		Xd = "&postID=",
		Yd = "&quot;",
		Zd = "&rt=",
		$d =
		"&s=",
		ae = "&size=",
		be = "&srt=",
		ce = "&tbsrt=",
		de = "&text=",
		ee = "&tran=",
		fe = "'",
		ge = "(",
		he = "(function(){ return{",
		ie = ")",
		je = "*",
		ke = "+",
		le = ",",
		me = ", ",
		ne = "-",
		oe = "-1",
		pe = "-10000px",
		qe = "-9999px",
		re = "-khtml-border-radius",
		se = "-moz-border-radius",
		te = "-moz-transform",
		ue = "-ms-border-radius",
		ve = "-ms-transform",
		we = "-o-transform",
		xe = "-p",
		ye = "-webkit-border-radius",
		ze = "-webkit-transform",
		Ae = ".",
		Be = "...",
		Ce = ".adsense",
		De = ".blogger-comments",
		Ee = ".blogspot.",
		Fe = ".close",
		Ge = ".comment-styler",
		He = ".comments",
		Ie = ".comments-content",
		Je = ".comments-replybox",
		Ke = ".comments-replybox, .comment-replybox-thread",
		Le = ".commentview",
		Me = ".defer",
		Ne = ".easter",
		Oe = ".editor",
		Pe = ".editor-panel",
		Qe = ".filter",
		Re = ".g-follow",
		Se = ".gadget-container .gadget",
		Te = ".gadget-content",
		Ue = ".gadget-item",
		Ve = ".gadget-resize-detector",
		We = ".gadget-selected .gadget-container",
		Xe = ".gadget-title",
		Ye = ".gadgetdock",
		Ze = ".history",
		$e = ".item",
		af = ".item, .lightbox-panel",
		bf = ".item, .overview-panel",
		cf = ".item[data-id=",
		df = ".jpg",
		ef = ".lightbox",
		ff = ".lightbox-content",
		gf = ".lightbox-contentwrap",
		hf = ".lightbox-panel",
		jf = ".loadmore",
		kf = ".meta",
		lf = ".metrics",
		mf = ".monochromatic-wrapper",
		nf = ".next",
		of = ".no-autoscroll",
		pf = ".on",
		qf = ".overview",
		rf = ".overview-content",
		sf = ".overview-panel",
		tf = ".plus-badge",
		uf = ".plus-comment-count",
		vf = ".plus-comments",
		wf = ".plus-followers",
		xf = ".previous",
		yf = ".search",
		zf = ".selfselect",
		Af = ".share-controls",
		Bf = ".share-facebook",
		Cf = ".share-plusone",
		Df = ".share-twitter",
		Ef = ".sharing",
		Ff = ".shortcuts",
		Gf = ".singleton-element, #injected-iframe",
		Hf = ".template",
		If = ".text-break",
		Jf = ".text-paragraph",
		Kf = ".title",
		Lf = ".toggle-container",
		Mf = ".toggle-switch",
		Nf = ".viewitem",
		Of = ".viewitem-inner",
		Pf = ".viewitem-panel",
		w = "/",
		Qf = "/$1_th.jpg",
		Rf = "/-/",
		Sf = "//",
		Tf = "//csi.gstatic.com/csi?v=3&s=blogger",
		Uf = "//img.youtube.com/vi/",
		Vf = "//maps.googleapis.com/maps/api/staticmap",
		Wf = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
		Xf = "//platform.twitter.com/widgets/tweet_button.html?url=",
		Yf = "//www.blogger.com",
		Zf = "//www.blogger.com/feeds/default/blogs?v=2&alt=json",
		$f = "//www.facebook.com/plugins/like.php?",
		ag = "//www.youtube.com/v/",
		bg = "/0.jpg",
		cg = "/activities/public",
		dg = "/comments/default",
		eg = "/delete-comment.g?blogID=",
		fg = "/feeds/",
		gg = "/feeds/pages/default",
		hg = "/feeds/posts/default",
		ig = "/moderate-legacy-comment.g?blogID=",
		jg = "/pages/default",
		kg = "/posts/default",
		lg = "/search",
		mg = "/search/label/",
		ng = "/th_$1",
		og = "/v1/people/",
		x = "0",
		pg = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0      0      0      1 0",
		qg = "00",
		rg = "000000",
		sg = "1",
		tg = "1 hour ago",
		ug = "1 minute ago",
		vg = "1 week ago",
		wg = "100px Monospace",
		xg = "12",
		yg = "2d",
		zg = "400px",
		Ag = "50%",
		Bg = "5000px",
		Cg = ":",
		Dg = ":not(.surprise)",
		Eg = ":text",
		Fg = "<",
		Gg = '\x3c!-- Yo Dawg... --\x3e<meta name="meta" content="meta"/>',
		Hg = "<(",
		Ig = "<(\\w+)",
		Jg = "</",
		Kg = "</div>",
		Lg = "</span>",
		Mg = "<a name='more'></a>",
		Ng = "<a/>",
		Og = "<br/>",
		Pg = '<div class="surprise"/>',
		Qg = '<div id="nyanyanya"/>',
		Rg = "<div/>",
		Sg = "<div>",
		Tg = '<iframe width="500" height="281" src="',
		Ug = '<iframe width="500" height="281" src="//www.youtube.com/embed/',
		Vg = '<img style="vertical-align: bottom;"/>',
		Wg = "<img/>",
		Xg = "<ins>",
		Yg = '<link href="https://fonts.googleapis.com/css?family=',
		Zg = "<p/>",
		$g = '<span class="',
		ah = '<span class="deleted-comment">',
		bh = '<span class="monochromatic-wrapper"/>',
		ch = '<span class="text-break"> </span>',
		dh = '<span class="text-paragraph text-run"/>',
		eh = "=",
		fh = '="',
		gh = ">",
		hh = "?",
		ih = "?v=3",
		jh = '?wmode=opaque" frameborder="0" allowfullscreen></iframe>',
		kh = "AM",
		lh = "Add comment",
		mh = "Allerta",
		nh = "Allerta Stencil",
		oh = "April",
		ph = "Arimo",
		qh =
		"Arvo",
		rh = "August",
		sh = "BANNER",
		th = "BILLBOARD",
		uh = "BLOGGER",
		vh = "BR",
		wh = "BUTTON",
		xh = "Bentham",
		yh = "Blogger",
		zh = "By {PostAuthorName}",
		Ah = "CENTER",
		Bh = "Calibri",
		Ch = "Calligraffitti",
		Dh = "Cambria",
		Eh = "Cannot nest blocks with the same tag",
		Fh = "Cantarell",
		Gh = "Cardo",
		Hh = "Cherry Cream Soda",
		Ih = "Chewy",
		Jh = "Coming Soon",
		Kh = "Consolas",
		Lh = "Copse",
		Mh = "Corsiva",
		Nh = "Cousine",
		Oh = "Covered By Your Grace",
		Ph = "Crafty Girls",
		Qh = "Crimson Text",
		Rh = "Crushed",
		Sh = "Cuprum",
		z = "Date",
		Th = "December",
		Uh = "Delete",
		Vh = "Droid Sans",
		Wh = "Droid Sans Mono",
		Xh = "Droid Serif",
		Yh = "Ek Mukta",
		Zh = "ErrorMessage",
		$h = "Even",
		ai = "FILTERED_PREMOD",
		bi = "February",
		ci = "First",
		di = "Fontdiner Swanky",
		ei = "Friday",
		fi = "GET",
		gi = "GFS Didot",
		hi = "GFS Neohellenic",
		ii = "GadgetDockItem",
		ji = "GadgetDockItemContents",
		ki = "GadgetDockResizeDetector",
		li = "Geo",
		mi = "Google+",
		ni = "Gruppo",
		oi = "HALF_BANNER",
		pi = "HTMLEvents",
		qi = "Hanuman",
		ri = "Homemade Apple",
		si = "IM Fell DW Pica",
		ti = "IM Fell DW Pica SC",
		ui = "IM Fell Double Pica",
		vi = "IM Fell Double Pica SC",
		wi = "IM Fell English",
		xi = "IM Fell English SC",
		yi = "IM Fell French Canon",
		zi = "IM Fell French Canon SC",
		Ai = "IM Fell Great Primer",
		Bi = "IM Fell Great Primer SC",
		Ci = "INBOX_NEWITEMS",
		Di = "Inconsolata",
		Ei = "Index",
		Fi = "Invalid attribute",
		Gi = "Invalid attribute string",
		Hi = "Irish Growler",
		Ii = "January",
		Ji = "Josefin Sans",
		Ki = "Josefin Slab",
		Li = "July",
		Mi = "June",
		Ni = "Just Another Hand",
		Oi = "Kenia",
		Pi = "Kranky",
		Qi = "L0201",
		Ri = "L0202",
		Si = "L0203",
		Ti = "L0204",
		Ui = "L0205",
		Vi = "L0206",
		Wi = "L0207",
		Xi = "LARGE_LEADERBOARD",
		Yi = "LARGE_RECTANGLE",
		Zi = "LARGE_SKYSCRAPER",
		$i = "LEADERBOARD",
		aj = "Last",
		bj = "Lightbox",
		cj = "Load more",
		dj = "Loading",
		ej = "Lobster",
		fj = 'Location: <a class="url fn" href="{GeoLocationURL}" itemprop="contentLocation">{GeoLocationName}</a>',
		gj = "Luckiest Guy",
		hj = "MEDIUM_RECTANGLE",
		ij = "March",
		jj = "May",
		kj = "Merriweather",
		lj = "Method ",
		mj = "Missing or invalid name",
		nj = "Missing or invalid tag",
		oj = "Molengo",
		pj = "Monday",
		qj = "Mountains of Christmas",
		rj = "MozOrientation",
		sj = "Neucha",
		tj = "Neuton",
		uj = "No labels",
		vj = "No more comments",
		wj = 'No results for <span class="search_query">{HTMLEscapedSearchQuery}</span>',
		xj = "No results for: {HTMLEscapedSearchQuery}",
		yj = "No scope specified",
		zj = "No term specified",
		Aj = "Nobile",
		Bj = "November",
		Cj = "Number",
		Dj = "OFL Sorts Mill Goudy TT",
		Ej = "October",
		Fj = "Odd",
		Gj = "Old Standard TT",
		Hj = "Open Sans",
		Ij = "Overview",
		Jj = "OverviewItem",
		Kj = "PM",
		Lj = "PORTRAIT",
		Mj = "PRE",
		Nj = "PT Sans",
		Oj = "PT Sans Caption",
		Pj = "PT Sans Narrow",
		Qj = "Page",
		Rj = "Permanent Marker",
		Sj = "Philosopher",
		Tj = "PhotoURL-HighRes",
		Uj = "PlaintextBody",
		Vj = "Plus",
		Wj = "Post",
		Xj = 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{Year}-{MonthNumberWithZero}-{DayOfMonthWithZero} {CapitalAmPm} {12HourWithZero}:{Minutes}:{Seconds}</abbr> by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>',
		Yj = 'Posted <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{Year}-{MonthNumberWithZero}-{DayOfMonthWithZero} {CapitalAmPm} {12HourWithZero}:{Minutes}:{Seconds}</abbr> by {PostAuthorName}',
		Zj = 'Posted at <abbr class="time published" title="{ISO8601}" itemprop="datePublished">{12Hour}:{Minutes} {AmPm}</abbr>',
		ak = 'Posted by <a class="url fn" href="{PostAuthorURL}" rel="author" itemprop="author">{PostAuthorName}</a>',
		bk = "Posted {Year}-{MonthNumberWithZero}-{DayOfMonthWithZero} {CapitalAmPm} {12HourWithZero}:{Minutes}:{Seconds}",
		ck = "Puritan",
		dk = "QuickSearch",
		ek = "Reenie Beanie",
		fk = "Replies",
		gk = "Reply",
		hk = "Resizable",
		ik = "Roboto",
		jk = "Rock Salt",
		kk = "S0001",
		lk = "S0002",
		mk = "S0003",
		nk = "S0004",
		ok = "S0005",
		pk = "S0006",
		qk = "S0007",
		rk = "S0008",
		sk = "S0009",
		tk = "S0011",
		uk = "S0012",
		vk = "S0013",
		wk = "S0022",
		xk = "SKYSCRAPER",
		yk = "SMALL_RECTANGLE",
		zk = "SMALL_SQUARE",
		Ak = "SQUARE",
		Bk = "Saturday",
		Ck = "Schoolbell",
		Dk = "SearchQuery",
		Ek = "SearchResultCount",
		Fk = "September",
		Gk = "Show all {SearchResultCount} results",
		Hk = "Slackey",
		Ik = "Snippet",
		Jk = "Subscribe",
		Kk = "Summary",
		Lk = "Sunday",
		Mk = "Sunshiney",
		Nk = "Syncopate",
		Ok = "T",
		Pk = "TemplateEditor",
		Qk = "TemplateEditorCSS",
		Rk = "Thursday",
		Sk = "Tinos",
		Tk = "Tuesday",
		Uk =
		"Unexpected close block",
		Vk = "UnifrakturMaguntia",
		Wk = "Unkempt",
		Xk = "VERTICAL_BANNER",
		Yk = "Value",
		Zk = "ViewItem",
		$k = "Vollkorn",
		al = "WIDE_SKYSCRAPER",
		bl = "Walter Turncoat",
		cl = "Wednesday",
		dl = "Welcome",
		el = "Yanone Kaffeesatz",
		fl = "Yesterday",
		gl = "Z",
		hl = '[data-gadget-id="',
		il = "[id=",
		jl = "\\(\\s*([-\\w\\d\\.,\\s]+)\\s*\\)",
		kl = "]",
		ll = "],[name=",
		ml = "_",
		nl = "_WidgetManager._GetAllData()",
		ol = "__filtered",
		pl = "__nested:",
		ql = "__templates",
		rl = "_b",
		sl = "_b.jpg",
		tl = "_m",
		ul = "_n.jpg",
		vl = "_relative",
		wl = "_s",
		xl = "_setAccount",
		yl =
		"_t",
		zl = "_trackPageview",
		Al = "_wiggle",
		Bl = "_z",
		Cl = "a",
		Dl = "absolute",
		El = "active",
		Fl = "add",
		Gl = "adsbygoogle",
		Hl = "adsense",
		Il = "after",
		Jl = "alternate",
		Kl = "am",
		Ll = "analytics_id",
		Ml = "archive_blogspot",
		Nl = "area",
		Ol = "article",
		Pl = "atPeace_",
		Ql = "author",
		Rl = "authorPhoto.url",
		Sl = "auto",
		Tl = "background-color",
		Ul = "background-image",
		Vl = "base",
		Wl = "baseline",
		Xl = "before",
		Yl = "beforeunlaod",
		Zl = "best",
		$l = "blitz",
		am = "blitz.nocrawl.",
		bm = "blitzBaseUrl",
		cm = "blitz_",
		dm = "block",
		em = "blog.xpc.rpc",
		fm = "blogger",
		gm = "blogger.contentRemoved",
		hm = "blogger.displayTime",
		im = "blogger.itemClass",
		jm = "blogger.ui().viewType_.prototype.defaults.name",
		km = "blogspot",
		lm = "blur.search",
		A = "body",
		mm = "border-color",
		nm = "border-radius",
		om = "bottom",
		pm = "br",
		qm = "browser:",
		rm = "bubble",
		sm = "button_count",
		tm = "callback",
		um = "canvas",
		vm = "catastrophe",
		wm = "center",
		xm = "change",
		ym = "chopchop",
		zm = "chrome",
		Am = "class",
		Bm = "classic",
		Cm = "clearfilter",
		Dm = "clearselection",
		Em = "clearselection.easter",
		Fm = "clearselection.history",
		Gm = "clearselection.metrics",
		Hm = "clearselection.overview lightbox.overview",
		Im = "clearselection.viewitem",
		Jm = "click",
		Km = "click.easter",
		Lm = "click.editor",
		Mm = "click.lightbox",
		Nm = "click.overview",
		Om = "click.search",
		Pm = "click.selfselect",
		Qm = "click.viewitem",
		Rm = "client",
		Sm = "closing",
		Tm = "col",
		Um = "collapse",
		Vm = "collapse-breaks",
		Wm = "colliding",
		Xm = "collision",
		Ym = "color",
		Zm = "color:",
		$m = "command",
		an = "comment-count-holder_",
		bn = "comment-holder_",
		cn = "comment-view",
		dn = "community",
		en = "constructor",
		fn = "contiguous",
		gn = "corners",
		hn = "count",
		jn = "current",
		kn = "custom",
		ln = "cuteoverload",
		mn = "dance",
		nn = "dancenyan",
		on = "dancing",
		pn = "dancing_",
		qn = "data-ad-client",
		rn = "data-ad-format",
		sn = "data-ad-host",
		tn = "data-ad-host-channel",
		un = "data-ad-slot",
		vn = "data-ad-type",
		wn = "data-analytics-uacct",
		xn = "data-annotation",
		yn = "data-defer",
		zn = "data-dx-init",
		An = "data-dx-prop",
		Bn = "data-gadget-id",
		Cn = "data-height",
		Dn = "data-id",
		En = "data-identifier",
		Fn = "data-item-type",
		Gn = "data-itemid",
		Hn = "data-size",
		In = "data-spritle",
		B = "data-src",
		Jn = "data-template",
		Kn = "data-theme",
		Ln = "data-view-name",
		Mn = "data-width",
		Nn = "data:",
		On = "data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
		Pn = "data:image/gif;base64,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",
		Qn = "data:image/gif;base64,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",
		Rn = "data:image/png;base64,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",
		Sn = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzIiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnM0IiAvPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEuNTMzNDA5MiwtMS42NDM5MjQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHBhdGgKICAgICAgIGQ9Ik0gNi4wNTYxODMzLDIuNTg4MDUyMSBDIDMuOTM0NTM2LDIuNTg4MDUyMSAyLjIxMjYyMDUsNC4zMDk4ODIzIDIuMjEyNjIwNSw2LjQzMTQyNCBDIDIuMjEyNjIwNSwxMC43NDczODggNi4wNTYwODU3LDEzLjEyMTAxOCA5LjUzMzQwNzgsMTYuNjk5Nzk2IEMgMTMuMDEwODI2LDEzLjEyMTAxOCAxNi44NTQxOTgsMTAuNzQyNjUgMTYuODU0MTk4LDYuNDMxNDI0IEMgMTYuODU0MTk4LDQuMzA5ODgyMyAxNS4xMzIyODUsMi41ODgwNTIxIDEzLjAxMDYzNCwyLjU4ODA1MjEgQyAxMS40NzE2NzQsMi41ODgwNTIxIDEwLjAzMzg0NSwzLjgzMzI0NSA5LjUzMzQwNzgsNC44MDM5OTYzIEMgOS4wMzc1NTE1LDMuODMzMjQ1IDcuNTk1MTQ2OSwyLjU4ODA1MjEgNi4wNTYxODMzLDIuNTg4MDUyMSB6IgogICAgICAgaWQ9InBhdGg3IgogICAgICAgc3R5bGU9ImZpbGw6I2U2MDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmY2RjZDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==",
		Tn = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzMzMTEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzEzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0iTSA0LjU0Njg4LDAuOTY4NzUgQyAyLjQyNTIzLDAuOTY4NzUgMC43MDMxMywyLjY5MDk2IDAuNzAzMTMsNC44MTI1IEMgMC43MDMxMyw5LjExNTYyIDQuNTE1MjcsMTEuNTAxNSA3Ljk4NDM4LDE1LjA2MjUgQyA4LjA3NTEyLDE1LjAwNzUgOC4wODMzNSwxNC45OTAyNCA4LjE3MTg4LDE0LjkzNzUgQyA4LjM0ODMyLDE0Ljc1ODIgOC41MjU2OCwxNC41ODAwNCA4LjcwMzEzLDE0LjQwNjI1IEwgNy42NzE4OCwxMi41NjI1IEwgOC40NTMxMywxMS45Njg3NSBMIDcuMjk2ODgsMTAuMTU2MjUgTCA4LjQ4NDM4LDkuMjE4NzUgTCA3LjM1OTM4LDguNDM3NSBMIDguMzkwNjMsNy4yNSBMIDcuMzI4MTMsNiBMIDguMTcxODgsNS4xNTYyNSBMIDcuMjAzMTMsNC41OTM3NSBMIDguMzI4MTMsMy45Mzc1IEwgOC4wMTU2MywzLjE4NzUgQyA3LjUxOTc3LDIuMjE2NzUgNi4wODU4NCwwLjk2ODc1IDQuNTQ2ODgsMC45Njg3NSB6IgogICAgICAgaWQ9InBhdGgzMzAyIgogICAgICAgc3R5bGU9ImZpbGw6I2U2MDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6I2ZmY2RjZDtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg==",
		Un = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjAiCiAgIHdpZHRoPSIxNiIKICAgaGVpZ2h0PSIxNiIKICAgaWQ9InN2ZzMzMTEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMzMzEzIiAvPgogIDxnCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0iTSAxMS40NTMxMywwLjkzNzUgQyA5LjkxNDE3LDAuOTM3NSA4LjQ4NDgyLDIuMTg1NSA3Ljk4NDM4LDMuMTU2MjUgTCA4LjI5Njg4LDMuOTA2MjUgTCA3LjE3MTg4LDQuNTYyNSBMIDguMTQwNjMsNS4xMjUgTCA3LjI5Njg4LDUuOTY4NzUgTCA4LjM1OTM4LDcuMjE4NzUgTCA3LjMyODEzLDguNDA2MjUgTCA4LjQ1MzEzLDkuMTg3NSBMIDcuMjY1NjMsMTAuMTI1IEwgOC40MjE4OCwxMS45Mzc1IEwgNy42NDA2MywxMi41MzEyNSBMIDguNjcxODgsMTQuMzc1IEMgMTEuOTQ5NTMsMTEuMTY0OSAxNS4yOTY4OCw4LjgxMDE5IDE1LjI5Njg4LDQuNzgxMjUgQyAxNS4yOTY4OCwyLjY1OTcxIDEzLjU3NDc4LDAuOTM3NSAxMS40NTMxMywwLjkzNzUgeiBNIDguMTQwNjMsMTQuOTA2MjUgQyA4LjA1MjEsMTQuOTU4OTkgOC4wNDM4NywxNC45NzYyNSA3Ljk1MzEzLDE1LjAzMTI1IEMgNy45NjM0OCwxNS4wNDE4OCA3Ljk3NDAzLDE1LjA1MTg1IDcuOTg0MzgsMTUuMDYyNSBDIDguMDM2MTMsMTUuMDA5MjQgOC4wODg3MywxNC45NTg5OCA4LjE0MDYzLDE0LjkwNjI1IHoiCiAgICAgICBpZD0icGF0aDMyOTYiCiAgICAgICBzdHlsZT0iZmlsbDojZTYwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZjZGNkO3N0cm9rZS13aWR0aDoxO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgo8L3N2Zz4K",
		Vn = "datacomplete",
		Wn = "default",
		Xn = "defer",
		Yn = "defer delay",
		Zn = "deferred",
		$n = "deg",
		ao = "delay",
		bo = "deleteclass",
		co = "deletelink",
		eo = "desiredX2_",
		fo = "desiredX3_",
		go = "desiredX_",
		ho = "desiredY2_",
		io = "desiredY3_",
		jo = "desiredY_",
		ko = "destroy",
		lo = "deviceorientation",
		mo = "direction",
		no = "discard",
		oo = "display",
		po = "display:block;",
		qo = "display:block;height:",
		ro = "div",
		so = "div,h1,h2,h3,h4,h5,h6,p",
		to = "doodle",
		uo = "duration",
		vo = "during",
		wo = "dx",
		xo = "dx-",
		yo = "dx-prop",
		zo = "dx-scene",
		Ao = "dynamicviews",
		Bo = "eeyore",
		Co = "eeyore is cute!",
		Do = "embed",
		Eo = "en",
		Fo = "error",
		Go = "error_page",
		Ho = "exceeding",
		Io = "exceeds",
		Jo = "explicit",
		Ko = "fadeIn",
		Lo = "fallingAndBouncing",
		Mo = "false",
		No = "feColorMatrix",
		Oo = "feeds",
		Po = "feeds/",
		Qo = "feeds/posts/default",
		Ro = "fetch.viewitem",
		So = "fetchend",
		To = "fetchend.metrics",
		Uo = "fetchstart",
		Vo = "fetchstart.metrics",
		Wo = "filter",
		Xo = "fixed",
		Yo = "flag",
		Zo = "focus.search",
		$o = "font-family",
		ap = "font-size",
		bp = "font-style",
		cp = "font-weight",
		dp = "font:",
		ep = "format",
		fp = "fountain-count",
		gp = "from",
		hp = "full",
		ip = "function",
		jp = "g",
		kp =
		"gadget-dock-overflow-bottom",
		lp = "gadget-dock-overflow-client-area",
		mp = "gadget-dock-overflow-normal",
		np = "gadget-notifying",
		op = "gadget-opening",
		pp = "gadget-selected",
		qp = "gapi.platform.go",
		rp = "gim",
		sp = "global-scope",
		tp = "google_view_type",
		up = "googleusercontent.com/gadgets",
		vp = "gpluscomments",
		wp = "gray",
		xp = "hasOwnProperty",
		yp = "hashchange.history",
		zp = "head",
		Ap = "head #template-editor-css",
		Bp = "headless",
		Cp = "height",
		Dp = "hesitating",
		Ep = "hidden",
		Fp = "hide",
		Gp = "horizontal",
		Hp = "host",
		Ip = "hostchannel",
		Jp = "hr",
		Kp =
		"href",
		Lp = "hsl(",
		Mp = "hsla(",
		Np = "html",
		Op = "http",
		Pp = "http://",
		Qp = "http://csi.gstatic.com/csi",
		Rp = "http://www.w3.org/1999/xlink",
		Sp = "http://www.w3.org/2000/svg",
		Tp = "https",
		Up = "https:",
		Vp = "https://csi.gstatic.com/csi",
		Wp = "https://support.google.com/blogger/bin/request.py?",
		Xp = "https://www.blogspot.com/thumb?",
		Yp = "https://www.googleapis.com/plus",
		Zp = "https://www.prguitarman.com/index.php?id=348",
		$p = "hybrid",
		aq = "id",
		bq = "iframe",
		cq = "ig",
		dq = "ignoreMySpeed_",
		eq = "im",
		fq = "image",
		gq = "image:",
		hq = "image:Background",
		iq = "image:Header",
		jq = "img",
		kq = "init",
		lq = "initcomplete",
		mq = "initcomplete.metrics",
		nq = "initial",
		oq = "initialized",
		pq = "inline",
		qq = "inline-block",
		rq = "input",
		sq = "input#search",
		tq = "instant",
		uq = "isPrototypeOf",
		vq = "iswriter",
		wq = "item",
		xq = "item-control blog-admin ",
		yq = "item_blogspot",
		zq = "items.length",
		Aq = "js",
		Bq = "json",
		Cq = "jsonp",
		Dq = "jumpPower_",
		Eq = "jumpWillSucceed_",
		Fq = "jumpedHighEnough_",
		Gq = "just now",
		Hq = "keydown",
		Iq = "keydown.editor",
		Jq = "keydown.shortcuts",
		Kq = "keygen",
		Lq = "keypress.shortcuts",
		Mq = "keyup.filter",
		Nq = "keyup.search",
		Oq = "konami",
		Pq = "lang:",
		Qq = "lastApex_",
		Rq = "lastchance",
		Sq = "layout",
		Tq = "lazyload",
		Uq = "left",
		Vq = "length",
		Wq = "li",
		Xq = "li.active",
		Yq = "light",
		Zq = "lightbox",
		$q = "lightbox-open",
		ar = "lightbox.lightbox",
		br = "like",
		cr = "like-image",
		dr = "link",
		er = "literal",
		fr = "load",
		gr = "load error",
		hr = "load.metrics",
		ir = "loadcomplete",
		jr = "loadcomplete.gadgetdock",
		kr = "loading",
		lr = "main_tos",
		mr = "manage",
		nr = "margin-top",
		or = "matrix",
		pr = "max-results",
		qr = "medium",
		rr = "meta",
		sr = "middle",
		tr = "moar",
		ur = "monochromatic-filter",
		vr = "monochromatic-friend",
		wr = "monochromatic-original",
		xr = "month",
		yr = "mousedown.easter",
		zr = "mousemove.mousewiggle",
		Ar = "mousemove.particles",
		Br = "mouseover",
		Cr = "mousewheel",
		Dr = "mousewiggle",
		Er = "mozilla",
		Fr = "msie",
		Gr = "n",
		Hr = "nd",
		Ir = "new",
		Jr = "no",
		Kr = "node",
		Lr = "none",
		Mr = "notouch",
		Nr = "number",
		Or = "number_",
		Pr = "nyan",
		Qr = "nyanyanya",
		Rr = "object",
		Sr = "off",
		Tr = "on",
		Ur = "onresize",
		Vr = "opacity",
		Wr = "opaque",
		Xr = "open",
		Yr = "other",
		Zr = "overflow",
		$r = "overview-open",
		as = "p",
		bs = "padding-bottom",
		cs = "page",
		ds = "param",
		es = "pause",
		fs = "perseverance",
		gs = "person",
		hs = "photo",
		is = "pin",
		js = "play",
		ks = "pm",
		ls = "pointer-events",
		ms = "popstate.history",
		ns = "position",
		os = "pre",
		ps = "preDanceRotation",
		qs = "preDanceRotation_",
		rs = "preDanceVelocity_",
		ss = "prefetched",
		ts = "preinit",
		us = "preload",
		vs = "prerender",
		ws = "preserve",
		xs = "preserve-breaks",
		ys = "private",
		zs = "profile",
		As = "prop",
		Bs = "propertyIsEnumerable",
		Cs = "prt",
		Ds = "pst",
		Es = "pub-1556223355139109",
		Fs = "published",
		Gs = "published-max",
		Hs = "published-min",
		Is = "px",
		Js = "px)",
		Ks = "px,",
		Ls = "px, 0)",
		Ms = "px;",
		Ns =
		"px;width:",
		Os = "rad)",
		Ps = "ratio",
		Qs = "rd",
		Rs = "ready",
		Ss = "recent",
		Ts = "rectangle",
		Us = "related",
		Vs = "relative",
		Ws = "relevance",
		Xs = "render",
		Ys = "rendercomplete",
		Zs = "rendercomplete.metrics",
		$s = "resize",
		at = "resize.",
		bt = "resource().total",
		ct = "rewarded",
		dt = "rgb(",
		et = "rgba(",
		ft = "rgba(0, 0, 0, 0.5)",
		gt = "right",
		ht = "roadmap",
		it = "rotate",
		jt = "rotate(",
		kt = "rotateX",
		lt = "rotateY",
		mt = "rotateZ",
		nt = "s",
		ot = "sans-serif",
		pt = "satellite",
		qt = "sb",
		rt = "scale",
		st = "scaleX",
		tt = "scaleY",
		ut = "scaleZ",
		vt = "script",
		wt = "scroll",
		xt = "scroll-limit",
		yt = "scroll.search, resize.search",
		zt = "scroll.sharing",
		At = "search/label/",
		Bt = "searching",
		Ct = "secondLastApex_",
		Dt = "select",
		Et = "select.easter",
		Ft = "select.history",
		Gt = "select.lightbox clearselection.lightbox",
		Ht = "select.metrics",
		It = "select.overview",
		Jt = "select.viewitem",
		Kt = "service",
		Lt = "setSkinData",
		Mt = "show",
		Nt = "singleton-element",
		Ot = "size",
		Pt = "skewX",
		Qt = "skewY",
		Rt = "skewZ",
		St = "skin.override",
		Tt = "skin.vars",
		Ut = "slot",
		Vt = "slow",
		Wt = "source",
		Xt = "span",
		Yt = "spritle",
		Zt = "spritle_",
		$t = "sq",
		au = "square",
		C = "src",
		bu = "st",
		cu = "start",
		du = "start-index",
		eu = "static",
		fu = "static_page",
		gu = "stop",
		D = "string",
		hu = "style",
		iu = "svg",
		ju = "t",
		ku = "table",
		lu = "tag",
		mu = "template-editor-css",
		nu = "templatechange",
		ou = "templateeditor",
		pu = "templates.editor",
		qu = "term",
		ru = "terrain",
		su = "text",
		tu = "text-align",
		uu = "text-decoration",
		vu = "text-paragraph",
		wu = "text-paragraph text-run",
		xu = "text-run",
		yu = "text-top",
		zu = "text:BodyBackgroundCSS",
		Au = "text:Custom CSS",
		Bu = "text:HeaderBackgroundCSS",
		Cu = "th",
		Du = "thumbnail",
		Eu = "to",
		Fu = "toLocaleString",
		Gu = "toString",
		Hu = "toggle-active",
		Iu = "token",
		Ju = "top",
		Ku = "touch",
		Lu = "transform",
		Mu = "translate(",
		Nu = "translate3d(",
		Ou = "translateX",
		Pu = "translateY",
		Qu = "translateZ",
		Ru = "transparent",
		Su = "trim",
		Tu = "true",
		Uu = "ts",
		Vu = "type",
		Wu = "unknown",
		Xu = "unload",
		Yu = "update",
		Zu = "updated",
		$u = "updated-max",
		av = "updated-min",
		bv = "updated.adsense",
		cv = "updated.comments",
		dv = "updated.editor",
		ev = "updated.filter",
		fv = "updated.gadgetdock",
		gv = "updated.meta",
		hv = "updated.search",
		iv = "updated.sharing",
		jv = "url",
		kv = "url(#monochromatic-filter)",
		lv = "v",
		mv =
		"value",
		nv = "valueOf",
		ov = "velX_",
		pv = "velY_",
		qv = "vertical",
		rv = "video",
		sv = "view",
		tv = "viewitem",
		uv = "viewitem-open",
		vv = "viewitem-show.viewitem",
		wv = "viewitem.",
		xv = "viewitem.metrics",
		yv = "visibility",
		zv = "visible",
		Av = "webkit",
		Bv = "webkitvisibilitychange",
		Cv = "white",
		Dv = "white-space",
		Ev = "whitespace",
		Fv = "width",
		Gv = "wmode",
		Hv = "www.youtube.com",
		Iv = "x",
		Jv = "xlink:",
		Kv = "year",
		Lv = "z",
		Mv = "z-index",
		Nv = "zd",
		Ov = "{",
		Pv = "{/block:",
		Qv = "{/template:",
		Rv = "{block:",
		Sv = "{template:",
		Tv = "|",
		Uv = "}; })()";

	function Vv() {
		return function(a) {
			return a
		}
	}

	function E() {
		return function() {}
	}

	function F(a) {
		return function() {
			return this[a]
		}
	}

	function Wv(a) {
		return function() {
			return a
		}
	}
	var H;
	(function(a, b) {
		function c(a, b) {
			if (!b.length) {
				if (a.caller) return a.caller.arguments;
				if (b.callee && b.callee.caller) return b.callee.caller.arguments
			}
			return b
		}
		var d = /xyz/.test(E()) ? /\bbase\b/ : /.*/;
		a.inherit = function(a) {
			function f() {
				var a = l.prototype,
					b;
				for (b in a) typeof a[b] == ip && typeof v[b] == ip && d.test(a[b]) ? n[b] = function(a, b) {
					return function() {
						var d = this.base;
						this.base = function() {
							return v[a].apply(this, c(this.base, arguments))
						};
						try {
							return b.apply(this, arguments)
						} finally {
							this.base = d
						}
					}
				}(b, a[b]) : n[b] = a[b]
			}

			function g() {}
			var k = arguments[1] || arguments[0],
				l = 2 == arguments.length ? arguments[0] : b,
				p = !0;
			if (l) {
				if (l.prototype.base) throw "Subclass already derives. Multiple inheritance is not supported.";
				for (var q in l.prototype) {
					p = !1;
					break
				}
			} else l = function() {
				this.base()
			};
			g.prototype = k.prototype;
			var n = new g,
				v = k.prototype;
			p || f();
			n.base = function() {
				p && (p = !1, f());
				var a = this.base;
				this.base = v.base;
				try {
					k.apply(this, c(n.base, arguments))
				} finally {
					this.base = a
				}
			};
			l.prototype = n;
			return l.prototype.constructor = l
		}
	})(jQuery);
	(function(a) {
		function b(b, c) {
			window.google_persistent_state_async = {};
			window.google_unique_id = null;
			b.each(function() {
				var b = a.extend({}, a.fn.adsense.defaults, g(a(this)), c);
				e(a(this), b)
			})
		}

		function c() {
			var b = window.adsbygoogle;
			if (b && b.push) return !0;
			q || (q = !0, a.getScript(Wf, d));
			return !1
		}

		function d() {
			for (var a = 0, b; b = p[a]; a++) b();
			p = []
		}

		function e(b, c) {
			var d = b.data(Hl) || {},
				e = f(c);
			c && a.isFunction(c.beforeRender) && c.beforeRender(e);
			var g = !1;
			if (d.If)
				for (var k in e) {
					if (e[k] !== d[k]) {
						g = !0;
						break
					}
				} else g = !0;
			if (g &&
				e.format && e.client) {
				b.empty();
				d = {
					"class": Gl
				};
				e.client && (d[qn] = e.client);
				e.host && (d[sn] = e.host);
				e.hostchannel && (d[tn] = e.hostchannel);
				e.slot && (d[un] = e.slot);
				e.type && (d[vn] = e.type);
				g = l[e.format];
				g.dc ? (d[rn] = g.format, d.style = po) : d.style = qo + g.height + Ns + g.width + Ms;
				e.analytics_id && (d[wn] = e.analytics_id);
				var p = a(Xg, d).appendTo(b).get(0);
				e.If = !0;
				b.data(Hl, e);
				setTimeout(function() {
					try {
						window.adsbygoogle.push({
							element: p
						})
					} catch (a) {}
				}, 0)
			}
		}

		function f(b) {
			var c = {};
			a.each(k, function(a, d) {
				c[d] = b[d]
			});
			c.format && (c.format =
				c.format.toLowerCase().replace(/\s|_/g, h));
			c.type && (c.type = a.grep(c.type.toLowerCase().split(/\s|_|,|\//), function(a) {
				return a == su || a == fq
			}).sort().join(le));
			var d;
			d = l[b.format] ? b.format : Sl;
			c.format = d;
			return c
		}

		function g(b) {
			var c = {},
				d;
			for (d in a.fn.adsense.defaults) {
				var e = b.data(d);
				e && (c[d] = e)
			}
			return c
		}
		a.fn.adsense = function(a) {
			if (this.length)
				if (c()) b(this, a);
				else {
					var d = this;
					p.push(function() {
						b(d, a)
					})
				}
			return this
		};
		a.fn.adsense.defaults = {
			analytics_id: void 0,
			format: void 0,
			type: void 0,
			slot: void 0,
			host: void 0,
			client: void 0,
			beforeRender: void 0
		};
		var k = [Ll, Rm, ep, Hp, Ip, Ut, Vu],
			l = {
				auto: {
					format: Sl,
					dc: !0
				},
				horizontal: {
					format: Gp,
					dc: !0
				},
				vertical: {
					format: qv,
					dc: !0
				},
				rectangle: {
					format: Ts,
					dc: !0
				},
				banner: {
					format: sh,
					width: 468,
					height: 60
				},
				button: {
					format: wh,
					width: 125,
					height: 125
				},
				halfbanner: {
					format: oi,
					width: 234,
					height: 60
				},
				largerectangle: {
					format: Yi,
					width: 336,
					height: 280
				},
				leaderboard: {
					format: $i,
					width: 728,
					height: 90
				},
				largeleaderboard: {
					format: Xi,
					width: 970,
					height: 90
				},
				billboard: {
					format: th,
					width: 970,
					height: 250
				},
				mediumrectangle: {
					format: hj,
					width: 300,
					height: 250
				},
				skyscraper: {
					format: xk,
					width: 120,
					height: 600
				},
				smallsquare: {
					format: zk,
					width: 200,
					height: 200
				},
				smallrectangle: {
					format: yk,
					width: 180,
					height: 150
				},
				square: {
					format: Ak,
					width: 250,
					height: 250
				},
				verticalbanner: {
					format: Xk,
					width: 120,
					height: 240
				},
				wideskyscraper: {
					format: al,
					width: 160,
					height: 600
				},
				largeskyscraper: {
					format: Zi,
					width: 300,
					height: 600
				},
				portrait: {
					format: Lj,
					width: 300,
					height: 1050
				}
			},
			p = [],
			q = !1
	})(jQuery);
	(function(a) {
		a.asClasses = function(b) {
			var c = [];
			(b = a.isArray(b) ? b : b.split(le)) && (c = a.map(b, function(b) {
				return (b ? a.trim(b.toLowerCase()) : h).replace(/[^\w\s]|_/g, h).replace(/\s+/g, ml)
			}));
			return c.sort().join(m)
		}
	})(jQuery);
	(function(a, b) {
		var c = /data-(\w+)/;
		a.fn.attributes = function(d, e) {
			var f = d !== b ? d : !1,
				g = e !== b ? e : !1,
				k = {};
			this.each(function() {
				a.each(this.attributes, function(a, b) {
					if (f || b.value)
						if (g) {
							var d = c.exec(b.name);
							d && (k[d[1]] = b.value)
						} else k[b.name] = b.value
				})
			});
			return k
		}
	})(jQuery);
	var Xv = jQuery;
	if (!Xv.browser) {
		var Yv = navigator.userAgent.toLowerCase(),
			Zv = /(opera)(?:.*version)?[ \/]([\w.]+)/,
			$v = /(msie) ([\w.]+)/,
			aw = /(mozilla)(?:.*? rv:([\w.]+))?/,
			bw = /(webkit)[ \/]([\w.]+)/.exec(Yv) || Zv.exec(Yv) || $v.exec(Yv) || 0 > Yv.indexOf("compatible") && aw.exec(Yv) || [];
		Xv.browser = {};
		Xv.browser[bw[1] || h] = !0;
		Xv.browser.version = bw[2] || x
	}
	var cw, dw, ew;
	for (ew in Xv.browser) "version" == ew ? dw = Xv.browser[ew] : ew == Av || ew == zm || "safari" == ew ? (Yv = navigator.userAgent, cw = (dw = /chrome\/([\d\.]+)/i.exec(Yv)) && zm || (dw = /version\/([\d\.]+) safari/i.exec(Yv)) && "safari" || (dw = [null, Xv.browser.version], Av), dw = dw && dw[1]) : cw = ew;
	Xv.browser.type = cw || Wu;
	Xv.browser.versionX = dw ? parseInt(dw, 10) : Wu;
	(function(a) {
		function b(a, b, c) {
			a = Math.min(b, Math.max(0, a));
			return void 0 !== c && parseInt(a, 10) != a ? (c = Math.pow(10, c), Math.round(a * c) / c) : a
		}

		function c(a, c, d) {
			var e = g.exec(a);
			a = e ? parseFloat(e[1], 10) : 0;
			e && e[2] && (a = a / 100 * (c || 1));
			return b(a, c, d)
		}

		function d(a) {
			return b(a / 1 * 100, 100, 0) + Fd
		}

		function e(a) {
			this.a = this.b = this.g = this.r = 0;
			a && e.parse(a, this)
		}
		var f = {
				aliceblue: Dc,
				antiquewhite: Oc,
				aqua: Pa,
				aquamarine: sb,
				azure: Fc,
				beige: Jc,
				bisque: id,
				black: za,
				blanchedalmond: kd,
				blue: Da,
				blueviolet: Ab,
				brown: Mb,
				burlywood: mc,
				cadetblue: gb,
				chartreuse: rb,
				chocolate: cc,
				coral: Zc,
				cornflowerblue: hb,
				cornsilk: od,
				crimson: jc,
				cyan: Pa,
				darkblue: Ba,
				darkcyan: Ia,
				darkgoldenrod: Vb,
				darkgray: Nb,
				darkgreen: Ea,
				darkgrey: Nb,
				darkkhaki: Yb,
				darkmagenta: Cb,
				darkolivegreen: fb,
				darkorange: $c,
				darkorchid: Jb,
				darkred: Bb,
				darksalmon: pc,
				darkseagreen: Eb,
				darkslateblue: bb,
				darkslategray: Va,
				darkslategrey: Va,
				darkturquoise: La,
				darkviolet: Hb,
				deeppink: Uc,
				deepskyblue: Ka,
				dimgray: kb,
				dimgrey: kb,
				dodgerblue: Ra,
				firebrick: Ub,
				floralwhite: qd,
				forestgreen: Ta,
				fuchsia: Tc,
				gainsboro: kc,
				ghostwhite: Mc,
				gold: ed,
				goldenrod: hc,
				gray: xb,
				green: Fa,
				greenyellow: Qb,
				grey: xb,
				honeydew: Ec,
				hotpink: Yc,
				indianred: ac,
				indigo: db,
				ivory: ud,
				khaki: Cc,
				lavender: oc,
				lavenderblush: md,
				lawngreen: qb,
				lemonchiffon: pd,
				lightblue: Pb,
				lightcoral: Bc,
				lightcyan: nc,
				lightgoldenrodyellow: Qc,
				lightgray: ec,
				lightgreen: Fb,
				lightgrey: ec,
				lightpink: cd,
				lightsalmon: ad,
				lightseagreen: Sa,
				lightskyblue: zb,
				lightslategray: ob,
				lightslategrey: ob,
				lightsteelblue: Sb,
				lightyellow: td,
				lime: Na,
				limegreen: Wa,
				linen: Pc,
				magenta: Tc,
				maroon: tb,
				mediumaquamarine: jb,
				mediumblue: Ca,
				mediumorchid: Wb,
				mediumpurple: Gb,
				mediumseagreen: Ya,
				mediumslateblue: pb,
				mediumspringgreen: Ma,
				mediumturquoise: cb,
				mediumvioletred: $b,
				midnightblue: Qa,
				mintcream: Lc,
				mistyrose: jd,
				moccasin: hd,
				navajowhite: gd,
				navy: Aa,
				oldlace: Rc,
				olive: wb,
				olivedrab: mb,
				orange: bd,
				orangered: Vc,
				orchid: gc,
				palegoldenrod: Ac,
				palegreen: Ib,
				paleturquoise: Rb,
				palevioletred: ic,
				papayawhip: ld,
				peachpuff: fd,
				peru: bc,
				pink: dd,
				plum: lc,
				powderblue: Tb,
				purple: vb,
				red: Sc,
				rosybrown: Xb,
				royalblue: $a,
				saddlebrown: Db,
				salmon: Nc,
				sandybrown: Hc,
				seagreen: Ua,
				seashell: nd,
				sienna: Lb,
				silver: Zb,
				skyblue: yb,
				slateblue: lb,
				slategray: nb,
				slategrey: nb,
				snow: rd,
				springgreen: Oa,
				steelblue: ab,
				tan: dc,
				teal: Ga,
				thistle: fc,
				tomato: Wc,
				turquoise: Za,
				violet: yc,
				wheat: Ic,
				white: vd,
				whitesmoke: Kc,
				yellow: sd,
				yellowgreen: Kb
			},
			g = /(-?[\d\.]+)(%)?/i,
			k = /#([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})/i,
			l = /rgb\(\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*\)/i,
			p = /rgba\(\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*([\d\.]+)\s*\)/i,
			q = /hsl\(\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*,\s*(-?\d{1,3}\%?)\s*\)/i,
			n = /hsla\(\s*(-?\d{1,3})\s*,\s*(-?\d{1,3}\%)\s*,\s*(-?\d{1,3}\%)\s*,\s*([\d\.]+)\s*\)/i;
		a.color = function(a) {
			return e.parse(a)
		};
		e.parse = function(a, b) {
			var c = b || new e;
			k.test(a) ? c.hex(a) : l.test(a) ? c.rgb(a) : p.test(a) ? c.rgba(a) : q.test(a) ? c.hsl(a) : n.test(a) ? c.hsla(a) : c.name(a);
			return c
		};
		e.prototype.clone = function() {
			var a = new e;
			a.rgba(this.r, this.g, this.b, this.a);
			return a
		};
		e.prototype.rgb = function(a, b, c) {
			if (void 0 !== a && !1 !== a) {
				if (typeof a === D && void 0 === b)
					if (c = l.exec(a)) a = c[1], b = c[2], c = c[3];
					else return this;
				this.rgba(a, b, c, 1);
				return this
			}
			return !1 !== a ? [dt, this.r, me, this.g, me, this.b, ie].join(h) : {
				r: this.r,
				g: this.g,
				b: this.b
			}
		};
		e.prototype.rgba = function(a, b, d, e) {
			if (void 0 !== a && !1 !== a) {
				if (typeof a === D && void 0 === b)
					if (e = p.exec(a)) a = e[1], b = e[2], d = e[3], e = e[4];
					else return this;
				this.r = c(a, 255, 0);
				this.g = c(b, 255, 0);
				this.b = c(d, 255, 0);
				this.a = c(e, 1, 5);
				return this
			}
			b = {
				r: this.r,
				g: this.g,
				b: this.b,
				a: this.a
			};
			return !1 !== a ? [et, b.r, me, b.g, me, b.b, me, b.a, ie].join(h) : b
		};
		e.prototype.hsl = function(a, b, c) {
			if (void 0 !== a && !1 !== a) {
				if (typeof a ===
					D && void 0 === b)
					if (c = q.exec(a)) a = c[1], b = c[2], c = c[3];
					else return this;
				this.hsla(a, b, c, 1);
				return this
			}
			b = this.hsla(!1);
			return !1 !== a ? [Lp, b.h, me, d(b.s), me, d(b.l), ie].join(h) : {
				h: b.h,
				s: b.s,
				l: b.l
			}
		};
		e.prototype.hsla = function(a, e, f, g) {
			if (void 0 !== a && !1 !== a) {
				if (typeof a === D && void 0 === e)
					if (g = n.exec(a)) a = g[1], e = g[2], f = g[3], g = g[4];
					else return this;
				a = (parseFloat(a, 10) % 360 + 360) % 360;
				a /= 360;
				e = c(e, 1);
				f = c(f, 1);
				g = c(g, 1);
				var k = .5 >= f ? f * (e + 1) : f + e - f * e,
					p = 2 * f - k;
				f = function(a) {
					var b = 0 > a ? a + 1 : 1 < a ? a - 1 : a;
					return 1 > 6 * b ? p + (k - p) * b * 6 : 1 >
						2 * b ? k : 2 > 3 * b ? p + (k - p) * (2 / 3 - a) * 6 : p
				};
				return this.rgba(Math.round(255 * f(a + 1 / 3)), Math.round(255 * f(a)), Math.round(255 * f(a - 1 / 3)), g)
			}
			var l = this.r / 255,
				q = this.g / 255,
				T = this.b / 255;
			g = this.a;
			var W = Math.max(l, q, T);
			e = Math.min(l, q, T);
			var y;
			f = (W + e) / 2;
			if (W == e) y = e = 0;
			else {
				var Y = W - e;
				e = .5 < f ? Y / (2 - W - e) : Y / (W + e);
				W == l ? y = (q - T) / Y + (q < T ? 6 : 0) : W == q ? y = 2 + (T - l) / Y : W == T && (y = 4 + (l - q) / Y);
				y = y / 6
			}
			y = b(360 * y, 360, 0);
			e = b(e, 1, 5);
			f = b(f, 1, 5);
			return !1 !== a ? [Mp, y, me, d(e), me, d(f), me, g, ie].join(h) : {
				h: y,
				s: e,
				l: f,
				a: g
			}
		};
		e.prototype.hex = function(a) {
			if (void 0 !==
				a && !1 !== a) return (a = k.exec(a)) ? this.rgb(parseInt(1 == a[1].length ? a[1] + a[1] : a[1], 16), parseInt(1 == a[2].length ? a[2] + a[2] : a[2], 16), parseInt(1 == a[3].length ? a[3] + a[3] : a[3], 16)) : this;
			if (0 == this.a) return Ru;
			var b = (x + this.r.toString(16)).slice(-2),
				c = (x + this.g.toString(16)).slice(-2),
				d = (x + this.b.toString(16)).slice(-2);
			return !1 !== a ? xa + b + c + d : {
				r: b,
				g: c,
				b: d
			}
		};
		e.prototype.name = function(a) {
			if (void 0 !== a) return a.toLowerCase() == Ru ? this.rgba(0, 0, 0, 0) : this.hex(f[a.toLowerCase()]);
			if (!(this.r || this.g || this.b || this.a)) return Ru;
			a = this.hex();
			for (var b in f)
				if (f[b] == a) return b
		};
		e.prototype.hue = function(a) {
			if (void 0 !== a) {
				var b = this.hsla(!1);
				return this.hsla(a, b.s, b.l, b.a)
			}
			return this.hsla(!1).h
		};
		e.prototype.saturation = function(a) {
			if (void 0 !== a) {
				var b = this.hsla(!1);
				return this.hsla(b.h, a, b.l, b.a)
			}
			return this.hsla(!1).s
		};
		e.prototype.lightness = function(a) {
			if (void 0 !== a) {
				var b = this.hsla(!1);
				return this.hsla(b.h, b.s, a, b.a)
			}
			return this.hsla(!1).l
		};
		e.prototype.alpha = function(a) {
			return void 0 !== a ? (this.a = c(a, 1), this) : this.a
		};
		e.prototype.saturate =
			function(a) {
				var b = this.hsla(!1);
				b.s += c(a, 1);
				return this.hsla(b.h, b.s, b.l, b.a)
			};
		e.prototype.desaturate = function(a) {
			var b = this.hsla(!1);
			b.s -= c(a, 1);
			return this.hsla(b.h, b.s, b.l, b.a)
		};
		e.prototype.lighten = function(a) {
			var b = this.hsla(!1);
			b.l += c(a, 1);
			return this.hsla(b.h, b.s, b.l, b.a)
		};
		e.prototype.darken = function(a) {
			var b = this.hsla(!1);
			b.l -= c(a, 1);
			return this.hsla(b.h, b.s, b.l, b.a)
		};
		e.prototype.shift = function(a) {
			var b = this.hsla(!1),
				c = (a = g.exec(a)) ? parseFloat(a[1]) : 0;
			a && a[2] && (c = c / 100 * 360);
			b.h += c;
			return this.hsla(b.h,
				b.s, b.l, b.a)
		}
	})(jQuery);
	(function(a) {
		function b(b, e) {
			if (!l && (p = b, p.shift = p.maxHeight && !(!p.align || p.align == Ju), l = [], W.bind(wt, d).bind($s, c), da = 0 < p.fps ? Math.floor(1E3 / p.fps) : 0, p.wrap))
				if (n = e, p.wrapContainer) {
					var f = a(p.wrapContainer);
					q = a(Rg);
					q.attr(aq, wo);
					q.css({
						position: Dl,
						top: 0,
						left: 0,
						width: f.width()
					}).prependTo(f);
					f.css(ns) == eu && f.css(ns, Vs)
				} else q = a(Rg), q.attr(aq, wo), q.css({
					position: Xo,
					top: 0,
					width: n.width(),
					left: n.offset().left,
					"z-index": (parseInt(n.css(Mv), 10) || 0) + 1
				}).prependTo(A)
		}

		function c() {
			if (q && n) {
				var b = p.wrapContainer ?
					a(p.wrapContainer) : void 0;
				if (b) {
					if (q.css({
							position: Dl,
							top: 0,
							left: 0,
							width: b.width()
						}), b.css(Zr) == Ep) {
						var c = b.width(),
							e = b.height();
						S = {
							top: 0,
							right: c,
							bottom: e,
							left: 0,
							width: c,
							height: e
						}
					}
				} else q.css({
					position: Xo,
					top: 0,
					width: n.width(),
					left: n.offset().left
				}), S = void 0;
				c = g();
				u = n.offset().top;
				b ? P = 0 : p.align == om ? u += c.height : P = p.align == sr || p.align == wm ? Math.max(0, Math.floor(c.height / 2 - p.maxHeight / 2) || 0) : isNaN(parseInt(p.align), 10) ? 0 : parseInt(p.align, 10)
			} else u = 0, S = void 0;
			d()
		}

		function d() {
			if (da && (new Date).getTime() -
				Ha < da) null === T && (T = setTimeout(d, da));
			else {
				var b = g();
				b.top += u;
				var c = -1;
				S && (b = {
					top: b.top,
					bottom: S.height + b.top,
					left: b.left,
					right: S.width + b.left,
					width: S.width,
					height: S.height
				});
				for (var e = 0, f; f = l[e]; e++) 0 > c && f.bounds.top <= b.top && f.bounds.bottom >= b.top && (c = e), f.update(b);
				p.wrap && (0 <= c && (f = l[c], b = b.top - f.bounds.top, f.bounds.height - f.ca > f.bounds.height - b ? K = f.fb.top - f.ca + b : f.ca && (K = f.fb.top)), q.css(Ju, P - K));
				if (c != G && (G = c, a.isFunction(p.onChange))) p.onChange(l[G], G);
				da && (Ha = (new Date).getTime(), null !== T &&
					(clearTimeout(T), T = null))
			}
		}

		function e(a) {
			this.T(a)
		}

		function f(a, b, c) {
			this.T(a, b, c)
		}

		function g(a) {
			var b = a || W;
			a = a ? b.position() : {
				top: b.scrollTop(),
				left: b.scrollLeft()
			};
			a.width = b.width();
			a.height = b.height();
			a.right = a.left + a.width;
			a.bottom = a.top + a.height;
			return a
		}

		function k() {}
		var l, p, q, n, v, u, K = 0,
			P = 0,
			G = -1,
			S, da = 0,
			Ha = 0,
			T = null;
		a.fn.dx = function(d) {
			if (!this.length) return this;
			b(a.extend({}, a.fn.dx.defaults, d), this.first().parent());
			this.each(function() {
				var b = a(this);
				b.attr(zn) || (b.attr(zn, !0), l.push(new e(b)))
			});
			c();
			return this
		};
		a.fn.dx.defaults = {
			fps: 0,
			wrap: !0,
			align: sr,
			wrapContainer: h,
			wrapItem: zo,
			maxHeight: 540,
			Rb: 0,
			hg: !1
		};
		a.fn.dx.fx = {};
		var W = a(window);
		e.prototype.T = function(b) {
			v && v.remove();
			this.element = b;
			this.bounds = this.fb = g(b);
			this.oe = !0;
			this.Ze = this.Zb();
			this.element.css({
				position: Vs,
				overflow: Ep
			});
			if (p.wrap) {
				var c = this.bounds.top - n.offset().top;
				this.xc = a(Rg).css({
					visibility: Ep,
					height: b.outerHeight(!0),
					width: b.outerWidth(!0)
				});
				this.element.attr(Dn) && this.xc.attr(Dn, this.element.attr(Dn));
				this.xc.insertBefore(this.element);
				p.hg && (v = this.xc.clone(), n.append(v));
				this.ca = Math.max(0, p.maxHeight ? this.bounds.height - p.maxHeight : 0);
				(b = p.Rb ? l.length ? l[l.length - 1].Wa : null : q.children().last().eq(0)) && (c = (parseInt(b.css(Ju), 10) || 0) + b.height());
				this.wd = a(Rg).css({
					position: Dl,
					height: this.ca ? p.maxHeight : this.bounds.height,
					overflow: Ep,
					width: this.bounds.width,
					top: c,
					left: this.element.css(Uq)
				}).addClass(p.wrapItem).append(this.element).appendTo(q);
				this.fb = g(this.wd)
			}
			this.Wa = this.wd || this.element;
			this.Wa.data(zo, this)
		};
		e.prototype.visible =
			function(a) {
				var b = this.fb,
					c = K,
					d = c + a.height;
				a = S ? b.top < d + P && b.right > a.left && b.bottom > c - P && b.left < a.right : b.top <= d + P && b.right >= a.left && b.bottom >= c - P && b.left <= a.right;
				a != this.oe && (p.wrap ? this.Wa.css(oo, a ? dm : Lr) : this.Wa.css(yv, a ? zv : Ep), this.oe = a);
				p.Rb && (a && this.vc ? (q.prepend(this.Wa), this.vc = !1) : a || this.vc || !(b.top - (d + P) > p.Rb || c - P - b.bottom > p.Rb) || (this.vc = !0, this.Wa.detach()));
				return a
			};
		e.prototype.update = function(a) {
			if (this.visible(a)) {
				for (var b = a.top - this.bounds.top, c = 0, d; d = this.Ze[c]; c++) d.apply(b,
					a);
				this.ca && (a = 0, 0 > b ? a = 0 : b > this.ca ? a = this.ca : a = b, this.element.css(Ju, -a))
			}
		};
		e.prototype.Zb = function() {
			var b = this;
			return this.element.find(je).filter(function() {
				var b = a(this);
				return a.hasData(this) && a(b).data(yo) || b.attr(An)
			}).map(function() {
				return f.from(a(this), b)
			})
		};
		f.prototype.T = function(b, c, d) {
			this.La = d;
			this.element = b;
			this.options = {
				prop: c.prop,
				start: void 0 !== c.start ? c.start : c.delay,
				stop: void 0 !== c.stop ? c.stop : c.duration ? (c.start || c.delay || 0) + c.duration : void 0,
				from: c.from,
				to: c.to,
				during: c.during,
				ratio: void 0 !== c.ratio ? c.ratio : 1,
				baseline: void 0 !== c.baseline ? c.baseline : Ju,
				bounds: c.bounds
			};
			this.fx = (this.vd = a.isFunction(this.options.prop)) ? this.options.prop : a.fn.dx.fx[this.options.prop] || new k
		};
		f.from = function(b, c) {
			function d(b, c) {
				var e = b.data(xo + c);
				return void 0 === e && [] || a.isArray(e) && e || typeof e === D && e.split(le) || [e]
			}
			var e = d(b, As),
				n = {};
			a.each([uo, ao, cu, gu, gp, Eu, vo, Ps, Wl, is], function(a, c) {
				for (var f = d(b, c), g = e.length; f.length < g;) f.push(f[f.length - 1]);
				n[c] = f
			});
			return a.map(e, function(a, d) {
				var g = {
						prop: e[d]
					},
					u;
				for (u in n) g[u] = n[u][d];
				g.bounds = c.bounds;
				return new f(b, g, c)
			})
		};
		f.prototype.apply = function(a, b) {
			this.vd ? this.fx(a, b, this) : this.fx && this.fx.apply(this, a, b)
		};
		k.ze = {
			display: !0,
			position: !0,
			visibility: !0
		};
		k.prototype.apply = function(a, b, c) {
			a.options.step || (this.init(a), a.options.step = this.Ud(a));
			a.options.step(b, c)
		};
		k.prototype.init = E();
		k.prototype.Ud = function(a) {
			function b(a) {
				e.css(g, n, e.shift(a * f.ratio, u, f.from, f.to))
			}

			function c(b) {
				b = a.La.ca ? a.La.ca : b.height;
				return f.baseline == om ? a.La.ca ?
					a.La.fb.top + b : b : void 0 !== f.stop ? f.stop : b
			}

			function d(b) {
				return f.baseline == om ? a.La.ca ? f.start - a.La.fb.top : f.start - b.height : f.start || 0
			}
			var e = this,
				f = a.options,
				n = f.prop,
				g = a.element,
				u = e.css(g, n);
			g.css(ns) == eu && g.css(ns, Vs);
			return void 0 !== f.during ? function(a, b) {
					e.css(g, n, d(b) <= a && c(b) >= a ? f.during : u)
				} : void 0 !== f.from || void 0 !== f.to ? (f.from = e.Hc(g, a), f.to = e.Ic(g, a), f.start = void 0 !== f.start ? f.start : 0, function(a, b) {
					var k = (a - d(b)) / (c(b) - d(b)),
						k = Math.min(1, Math.max(0, k));
					e.css(g, n, e.percent(k, u, f.from, f.to))
				}) :
				void 0 !== f.start || void 0 !== f.end ? function(a, e) {
					void 0 !== f.start && d(e) > a ? a = f.start : void 0 !== f.stop && c(e) < a && (a = f.stop);
					b(a)
				} : b
		};
		k.prototype.percent = function(a, b, c, d) {
			return c + a * (d - c)
		};
		k.prototype.shift = function(a, b) {
			return parseFloat(b, 10) + parseFloat(a, 10)
		};
		k.prototype.css = function(a, b, c) {
			if (void 0 !== c) return a.css(b, c);
			if (b in k.ze) return a.css(b);
			a = parseInt(a.css(b), 10);
			return isNaN(a) ? 0 : a
		};
		k.prototype.Hc = function(a, b) {
			return this.Zb(a, b, b.options.from)
		};
		k.prototype.Ic = function(a, b) {
			return this.Zb(a,
				b, b.options.to)
		};
		k.prototype.Zb = function(a, b, c) {
			var d = b.options;
			c = void 0 !== c ? c : this.css(a, d.prop);
			if (/top|bottom|left|right/i.test(d.prop)) {
				b = /top|bottom/i.test(d.prop) ? b.options.bounds.height : b.options.bounds.width;
				a = /top|bottom/i.test(d.prop) ? a.outerHeight() : a.outerWidth();
				c = /middle|center/i.test(c) ? Ag : c;
				if (/\d+%/.test(c)) return b = Math.round(b * parseInt(c, 10) / 100), b - a;
				if (/top|bottom|left|right/i.test(c)) return c == d.prop ? 0 : b - a
			}
			return parseFloat(c, 10) || 0
		};
		var y = a.inherit(k);
		y.prototype.init = function(a) {
			a.element.css(oo) ==
				pq && a.element.css(oo, qq)
		};
		y.prototype.css = function(a, b, c) {
			if (void 0 !== c) a.transform(b, c);
			else return parseFloat(a.transform(b), 10) || 0
		};
		var Y = new y;
		a.each([Ou, Pu, Qu, st, tt, ut, it, kt, lt, mt, Pt, Qt, Rt], function(b, c) {
			a.fn.dx.fx[c] = Y
		});
		y = a.inherit(y);
		y.prototype.css = function(a, b, c) {
			return void 0 === c ? (a = parseFloat(this.base(a, rt, c), 10), isNaN(a) ? 1 : a) : this.base(a, rt, c)
		};
		y.prototype.shift = function(a, b) {
			return b * Math.pow(1.01, a)
		};
		a.fn.dx.fx.zoom = a.fn.dx.fx.scale = new y;
		y = a.inherit(k);
		y.prototype.init = function(a) {
			1 ==
				a.options.ratio && (a.options.ratio = .01)
		};
		y.prototype.percent = function(b, c, d, e) {
			c = d.r + b * (e.r - d.r);
			var f = d.g + b * (e.g - d.b),
				n = d.b + b * (e.b - d.b);
			b = d.a + b * (e.a - d.a);
			return a.color().rgba(c, f, n, b)
		};
		y.prototype.shift = function(a, b) {
			return b.shift(a)
		};
		y.prototype.css = function(b, c, d) {
			return void 0 !== d ? (b.css(c, d.rgba()), d) : a.color(b.css(c))
		};
		y.prototype.Hc = function(b, c) {
			return c.options.from == Ru ? this.Ic(b, c).alpha(0) : void 0 !== c.options.from ? a.color(c.options.from) : this.css(b, c.options.prop)
		};
		y.prototype.Ic = function(b,
			c) {
			return c.options.to == Ru ? this.Hc(b, c).alpha(0) : void 0 !== c.options.to ? a.color(c.options.to) : this.css(b, c.options.prop)
		};
		a.fn.dx.fx.color = a.fn.dx.fx[Tl] = a.fn.dx.fx[mm] = new y;
		y = a.inherit(k);
		y.prototype.Ud = function(a) {
			var b = a.element;
			a.element.css(ns);
			a.element.css(Ju);
			var c = a.element.position(),
				d = a.options.start || 0,
				e = void 0 !== a.options.stop ? a.options.stop : Infinity;
			e == om && (e = a.La.bounds.height - a.element.height());
			var f = c.top + parseInt(b.css(nr), 10),
				n = e - d;
			b.css({
				position: Dl,
				top: f
			});
			return function(a) {
				a <
					d ? b.css(Ju, f) : a > n ? b.css(Ju, n - d + f) : b.css(Ju, a - d + f)
			}
		};
		a.fn.dx.fx.fixed = new y
	})(jQuery);
	(function(a) {
		var b = /<img\b([^>]*(?:.*?))\/?>/ig,
			c = /([^\s=]+)\s*=\s*((?:\')[^<\']*(?:\')|(?:")[^<"]*(?:"))/g;
		a.findImages = function(a) {
			a = a || h;
			for (var e = [], f; f = b.exec(a);) {
				f = f[1];
				for (var g, k, l = !0; g = c.exec(f);)
					if (g[1] !== h && g[2] !== h) {
						var p = g[1].toLowerCase();
						g = g[2].replace(/^(\'|")(.*)(\1)$/, Dd);
						p == C ? k = g : (p == Fv || p == Cp) && 1 >= parseInt(g, 10) && (l = !1)
					}
				k && l && e.push(k)
			}
			return e
		}
	})(jQuery);
	(function(a) {
		var b = /url\((['"]?)(.*?)\1\)/;
		a.fn.fullyLoaded = function(c) {
			if (!a.isFunction(c)) return this;
			var d = [];
			this.each(function() {
				a(this).find(je).each(function() {
					var c = a(this);
					if (c.is(jq) && !this.complete) {
						var e = c.attr(C);
						e && -1 == e.indexOf(Nn) && d.push(c.attr(C))
					} else(c = c.css(Ul)) && (c = b.exec(c)) && c[2] && -1 == c[2].indexOf(Nn) && d.push(c[2])
				})
			});
			if (d.length) {
				var e = [];
				a.each(d, function(b, c) {
					e.push(a.Deferred(function(b) {
						var d = new Image;
						a(d).bind(gr, function() {
							b.resolve()
						});
						d.src = c
					}))
				});
				a.when.apply(a,
					e).then(c)
			} else c();
			return this
		}
	})(jQuery);
	(function(a) {
		function b() {
			for (var a = 0; a < c.length; a++) c[a]();
			c.length = 0
		}
		var c = [];
		a.Cc = function(d) {
			var e = window.___gcfg;
			e && e.lang || (window.___gcfg = window.___gcfg || {}, window.___gcfg.lang = I().settings.blog_locale || Eo);
			(e = window.gapi) && e.plus && e.plusone && e.person && e.page && e.community ? d() : (0 == c.length && (window.___gcfg.parsetags = Jo, a.getScript(I().settings.plusone_api_src, b)), c.push(d))
		}
	})(jQuery);
	Date.prototype.fromISOString || (Date.prototype.fromISOString = function(a) {
		var b = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{2,3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/.exec(a);
		if (!b) return Date.parse && this.setTime(Date.parse(a)), isNaN(this.getTime()) ? void 0 : this;
		b[1] = parseInt(b[1], 10) || 0;
		b[4] = parseInt(b[4], 10) || 0;
		b[5] = parseInt(b[5], 10) || 0;
		b[6] = parseInt(b[6], 10) || 0;
		b[7] = parseInt(b[7], 10) || 0;
		b[10] = parseInt(b[10], 10) || 0;
		b[11] = parseInt(b[11], 10) || 0;
		b[2] = (parseInt(b[2],
			10) || 1) - 1;
		b[3] = parseInt(b[3], 10) || 1;
		a = 0;
		b[8] !== gl && b[9] && (a = 60 * b[10] + b[11], b[9] == ke && (a = 0 - a));
		this.setTime(Date.UTC(b[1], b[2], b[3], b[4], b[5] + a, b[6], b[7]));
		return this
	});
	Date.prototype.toISOString || (Date.prototype.toISOString = function() {
		function a(a) {
			return 10 > a ? x + a : a
		}
		return [this.getUTCFullYear(), ne, a(this.getUTCMonth() + 1), ne, a(this.getUTCDate()), Ok, a(this.getUTCHours()), Cg, a(this.getUTCMinutes()), Cg, a(this.getUTCSeconds()), gl].join(h)
	});
	(function(a) {
		function b() {
			var b = d();
			g = a.grep(g, function(d) {
				var e = a(d),
					f = e.data(Tq) || a.fn.lazyload.defaults;
				return c(e, {
					viewport: b,
					buffer: f.buffer
				}) ? (f.effect || a[f.effect] ? a(Wg).one(fr, function() {
					e.hide().attr(C, e.attr(B));
					e.removeAttr(B).removeData().removeClass(Zn);
					e[f.effect](f.duration)
				}).attr(C, e.attr(B)) : (e.attr(C, e.attr(B)), e.removeAttr(B).removeData().removeClass(Zn)), !1) : !0
			})
		}

		function c(b, c) {
			var f = c && c.viewport || d(),
				g = e(b),
				n = c && c.buffer || 0;
			n && (g.top -= n, g.right += n, g.bottom += n, g.left -= n);
			return g.top <=
				f.bottom && g.right >= f.left && g.bottom >= f.top && g.left <= f.right && !b.parents().andSelf().filter(function() {
					return a(this).css(oo) == Lr || a(this).css(Vr) == x
				}).length
		}

		function d() {
			var b = a(window);
			return {
				top: b.scrollTop(),
				right: b.scrollLeft() + b.width(),
				bottom: b.scrollTop() + b.height(),
				left: b.scrollLeft()
			}
		}

		function e(a) {
			var b = a.offset();
			return {
				top: b.top,
				right: b.left + a.width(),
				bottom: b.top + a.height(),
				left: b.left
			}
		}
		var f, g = [];
		a.fn.lazyload = function(e) {
			var l = void 0 !== e,
				p = a.extend(a.fn.lazyload.defaults, e),
				q = p.delay ||
				0;
			a(window).bind(wt, function() {
				clearTimeout(f);
				f = setTimeout(b, q)
			});
			var n = d();
			return this.each(function() {
				a(this).find(jq).each(function() {
					var b = a(this);
					if (b.attr(B) || !this.complete) c(b, {
						viewport: n,
						buffer: p.buffer
					}) ? b.attr(B) && b.attr(C, b.attr(B)).removeAttr(B) : (b.attr(B) || b.attr(B, b.attr(C)), p.placeholder ? b.attr(C, p.placeholder) : b.removeAttr(C), l && b.data(Tq, p), b.addClass(Zn), g.push(this))
				})
			})
		};
		a.fn.lazyload.defaults = {
			buffer: 400,
			delay: 250,
			placeholder: On,
			effect: Ko,
			duration: Vt
		}
	})(jQuery);
	(function(a) {
		var b;
		a.fn.measure = function(c, d) {
			c || b || (b = a(Rg).css({
				position: Dl,
				visibility: Ep,
				overflow: Ep,
				height: 0,
				width: 0,
				left: qe,
				top: qe
			}).prependTo(A));
			var e = this.clone().appendTo(c || b),
				f = {
					width: e.outerWidth(d),
					height: e.outerHeight(d)
				};
			e.remove();
			return f
		}
	})(jQuery);
	(function(a) {
		function b(a, b, c) {
			a.is(iu) ? (a[0].setAttribute(Fv, b), a[0].setAttribute(Cp, c), a[0].childNodes[0].setAttribute(Fv, b), a[0].childNodes[0].setAttribute(Cp, c)) : a.css({
				width: b,
				height: c
			})
		}

		function c(b, c) {
			var d = document.createElement(jq);
			d.onload = function() {
				a(this).css(Wo, wp);
				c(this)
			};
			d.src = b.src
		}

		function d(a, b) {
			var c = document.createElementNS(Sp, a);
			if (b)
				for (var d in b) 0 == d.indexOf(Jv) ? c.setAttributeNS(Rp, d.substr(6), b[d]) : c.setAttribute(d, b[d]);
			return c
		}

		function e(a, b) {
			function c(a) {
				var d = document.createElement(jq);
				d.src = a;
				b(d)
			}
			if (g) {
				var d = document.createElement(um),
					e = d.getContext(yg);
				if (e) {
					var f = document.createElement(jq);
					f.crossOrigin = h;
					f.onload = function() {
						try {
							d.width = f.width;
							d.height = f.height;
							e.drawImage(f, 0, 0);
							for (var b = e.getImageData(0, 0, d.width, d.height), G = 0, q = b.data.length; G < q; G += 4) b.data[G] = b.data[G + 1] = b.data[G + 2] = .2989 * b.data[G] + .587 * b.data[G + 1] + .114 * b.data[G + 2];
							e.putImageData(b, 0, 0, 0, 0, b.width, b.height);
							c(d.toDataURL());
							l++
						} catch (da) {
							k++, 4 < k && 0 == l && (g = !1), c(a.src)
						}
					};
					f.src = a.src
				} else g = !1, c(a.src)
			} else c(a.src)
		}
		a.fn.monochromatic = function() {
			return this.each(function() {
				if (a(this).is(jq)) {
					var c = a(this);
					if (c.parent().is(mf)) {
						var d = parseInt(c[0].style.width || c.width(), 10),
							e = parseInt(c[0].style.height || c.height(), 10);
						c.parent().css({
							width: d,
							height: e
						});
						b(c.siblings().first(), d, e)
					} else {
						var f = c.addClass(wr).wrap(bh).parent();
						f.css({
							position: Vs,
							display: qq,
							width: c.width(),
							height: c.height()
						});
						a.monochrome(this, function(d) {
							c.css(Mv, 1);
							a(d).css({
								position: Dl,
								"z-index": 0,
								left: 0,
								top: 0
							});
							b(a(d), c.width(), c.height());
							d.setAttribute(Am,
								vr);
							f.append(d)
						})
					}
				} else a(this).find(jq).monochromatic()
			})
		};
		a.monochrome = function(b, g) {
			var n = a.browser && a.browser.type;
			if (n == Fr) c(b, g);
			else if (n == zm || n == Er) {
				if (!f) {
					var n = d(iu, {
							width: 0,
							height: 0,
							baseProfile: hp
						}),
						k = d(Wo);
					k.id = ur;
					var u = d(No, {
						type: or,
						values: pg
					});
					k.appendChild(u);
					n.appendChild(k);
					a(n).css({
						visibility: Ep,
						position: Dl,
						top: -9999
					}).prependTo(A);
					f = !0
				}
				n = d(iu, {
					width: a(b).width(),
					height: a(b).height()
				});
				k = d(fq, {
					x: 0,
					y: 0,
					filter: kv,
					"xlink:href": b.src,
					width: a(b).width(),
					height: a(b).height()
				});
				n.appendChild(k);
				g(n)
			} else e(b, g)
		};
		var f = !1,
			g = !0,
			k = 0,
			l = 0
	})(jQuery);
	(function(a) {
		function b(b) {
			var d = a(this),
				e = (new Date).getTime(),
				f = d.data(Al) || [];
			f.unshift({
				x: b.clientX,
				y: b.clientY,
				Bg: e
			});
			for (var g = 0, k = 0, l = 0, p = 0, q = 0, n = 0, v;
				(v = f[g]) && !(2E3 < e - v.Bg); g++) {
				var k = k + v.x,
					l = l + v.y,
					u = f[g + 1];
				if (u) {
					var K = v.x - u.x;
					v = v.y - u.y;
					(0 > K * p || 0 > v * q) && n++;
					p = K;
					q = v
				}
			}
			g < f.length && (f = f.slice(0, g + 1));
			4 <= n && (f = [], b.type = Dr, b.pageX = b.clientX = Math.round(k / g), b.pageY = b.clientY = Math.round(l / g), a.event.handle.apply(this, arguments));
			d.data(Al, f)
		}
		a.event.special.mousewiggle = {
			setup: function() {
				a(this).bind(zr,
					b)
			},
			teardown: function() {
				a(this).unbind(zr, b)
			}
		}
	})(jQuery);
	(function(a) {
		function b() {
			k = Math.max(0, k - 2);
			for (var a = !0, c = 0, d; d = f[c]; c++) a &= d.update(), a &= d.wa;
			q = a ? 250 : 35;
			n = window.setTimeout(b, q)
		}

		function c(a, b, c) {
			this.Ea = a;
			this.settings = c || {};
			this.particles = [];
			this.wa = !1;
			this.offset = {
				left: 0,
				top: 0
			};
			b && this.init(b)
		}

		function d(b, c, d, e, f) {
			this.x = this.jg = b;
			this.y = this.kg = c;
			this.r = this.Fc = d;
			f = void 0 === f ? 100 : f;
			this.K = f * (Math.random() - .5);
			this.I = f * (Math.random() - .5);
			this.fe = 3 + 98 * Math.random();
			this.yg = .1 + .4 * Math.random();
			this.va = 0;
			this.eb = 1;
			this.wa = !1;
			b = xa + e;
			this.element =
				a(Rg);
			c = {
				position: Dl,
				"z-index": oe
			};
			v ? (this.element.html(Ae), c.color = b, c.cursor = Wn, c.font = wg) : (c[ye] = zg, c[se] = zg, c[ue] = zg, c[re] = zg, c[nm] = zg, c[Tl] = b);
			this.element.css(c);
			this.position()
		}
		var e = !1,
			f = [];
		a.fn.particles = function(b, c) {
			if (g[b]) return g[b].apply(this, Array.prototype.slice.call(arguments, 1));
			if (typeof b !== Rr && b) a.error(lj + b + fa);
			else return g.init.apply(this, arguments)
		};
		var g = {
				init: function(b, d) {
					g.play();
					return this.each(function() {
						b && b.length && f.push(new c(a(this), b, d))
					})
				},
				play: function() {
					e ||
						(a(document).bind(Ar, function(a) {
							k = 200;
							l = a.clientX;
							p = a.clientY
						}), e = !0);
					b()
				},
				pause: function() {
					a(document).unbind(Ar);
					e = !1;
					n && (window.clearTimeout(n), n = 0)
				},
				toggle: function() {
					g[n ? es : js]()
				}
			},
			k = 200,
			l = -200,
			p = -200,
			q = 35,
			n, v = a.browser.msie && 9 > parseInt(a.browser.version, 10),
			u = !(a.browser.msie && 9 > parseInt(a.browser.version, 10));
		c.prototype.init = function(b) {
			for (var c = 0, e; e = b[c]; c++) e = new d(e.x, e.y, e.r, e.c || rg, this.settings.initialVelocity), this.particles.push(e), this.Ea.append(e.element);
			this.offset = a(this.Ea).offset();
			this.Ea.css(ns) == eu && this.Ea.css(ns, Vs)
		};
		c.prototype.dispose = function() {
			for (var a = 0, b; b = this.particles[a]; a++) b.remove();
			this.particles = []
		};
		c.prototype.update = function() {
			this.wa = !0;
			for (var a = l - this.offset.left, b = p - this.offset.top, c = 0, d; d = this.particles[c]; c++) d.update(a, b), this.wa &= d.wa
		};
		d.prototype.update = function(a, b) {
			this.x += this.K;
			this.y += this.I;
			this.K = this.sd(.92 * (this.K + 0 / this.Fc));
			this.I = this.sd(.92 * (this.I + 0 / this.Fc));
			var c = a - this.x,
				d = b - this.y,
				e = Math.sqrt(c * c + d * d),
				c = c / e,
				d = d / e;
			e < k ? (this.K -=
				c * this.fe, this.I -= d * this.fe, this.va += .4 * (.005 - this.va), this.eb = Math.max(0, .9 * this.eb - .01), this.K *= 1 - this.eb, this.I *= 1 - this.eb) : (this.va += .005 * (this.yg - this.va), this.eb = Math.min(1, this.eb + .03));
			c = this.jg - this.x;
			d = this.kg - this.y;
			e = Math.sqrt(c * c + d * d);
			this.K += c * this.va;
			this.I += d * this.va;
			this.r = this.Fc + e / 8;
			(this.wa = .3 > e && .3 > this.K && .3 > this.I) || this.position()
		};
		d.prototype.sd = function(a) {
			return Math.min(50, Math.max(-50, a))
		};
		d.prototype.position = function() {
			var a;
			if (v) this.element.css({
				left: this.x - 20,
				top: this.y -
					60
			});
			else {
				var b = 2 * this.r;
				u ? (a = [Mu, this.x, Ks, this.y, Js].join(h), this.element.css({
					transform: a,
					"-moz-transform": a,
					"-ms-transform": a,
					"-o-transform": a,
					"-webkit-transform": a,
					width: b,
					height: b
				})) : this.element.css({
					left: this.x,
					top: this.y,
					width: b,
					height: b
				})
			}
		}
	})(jQuery);
	(function(a) {
		function b(b, d, e, f) {
			if (a(b.target).parents().andSelf().filter(b.data).length) {
				d = a(b.data);
				e = 0 == d.scrollTop();
				var g = d[0].scrollHeight - d.scrollTop() == d[0].clientHeight,
					k = 0 > f || 32 == b.which || 40 == b.which;
				if ((f = 0 < f || 38 == b.which) && e || k && g)
					if (e = d.data(tm), g = !1, a.isFunction(e) && (g = e(d, f ? 1 : -1)), !g || void 0 === g) return b.preventDefault(), !1
			}
		}
		a.fn.scrollLimit = function(c) {
			var d = a.extend({
				keydown: !0,
				mousewheel: !0,
				callback: void 0
			}, c);
			return this.each(function() {
				d.keydown && a(this).bind(Hq, this, b);
				d.mousewheel &&
					a(this).bind(Cr, this, b);
				d.callback && a(this).data(tm, d.callback)
			})
		}
	})(jQuery);
	(function(a) {
		function b(b) {
			function c(b) {
				b.contents().each(function() {
					if (1 == this.nodeType) {
						var b = a(this),
							d = p.test(this.nodeName);
						if (d || a.trim(b.text()) != h) {
							c(b);
							var e = b.css(tu),
								n = b.css(uu),
								g = b.css(bp),
								k = b.css(cp),
								q;
							if (l.test(this.nodeName)) {
								var Ha = a(Zg).html(this.innerHTML);
								b.replaceWith(Ha);
								b = Ha;
								this.nodeName == Ah ? e = wm : this.nodeName == Mj && (q = os)
							}
							b.removeAttr(hu);
							d || (e && e != Uq && b.css(tu, e), g && b.css(bp, g), k && b.css(cp, k), n && b.css(uu, n), q && b.css(Dv, q))
						} else b.remove()
					} else 3 != this.nodeType && a(this).remove()
				})
			}

			function d(b, c) {
				c = c || 0;
				for (var e = b[0].childNodes, f = 0, k; k = e[f]; f++)
					if (1 == k.nodeType) {
						if (c && q.test(k.nodeName)) {
							k = document.createDocumentFragment();
							for (var l = f, p; p = e[l]; l++) k.appendChild(p.cloneNode(!0));
							a(k).insertAfter(b);
							for (l = e.length - 1; l >= f; l--) b[0].removeChild(e[l]);
							return !0
						}
						if (d(a(k), c + 1)) return !0
					}
				return !1
			}

			function k(b) {
				for (var c = b[0].childNodes, d = -1, e = -1, f = 0, g; g = c[f]; f++)
					if (0 > d) {
						if (3 == g.nodeType || 1 == g.nodeType && !q.test(g.nodeName)) d = f
					} else if (0 > e) 1 == g.nodeType && q.test(g.nodeName) && (e = f - 1);
				else break;
				if (0 <= d) {
					0 > e && (e = c.length - 1);
					g = document.createDocumentFragment();
					for (var k = !1, f = d; f <= e; f++) k = k || a.trim(c[f].nodeValue) !== h, g.appendChild(c[f].cloneNode(!0));
					for (; e >= d; e--) b[0].removeChild(c[e]);
					0 < d ? (a(Zg).append(g).insertAfter(c[d - 1]), k && c[d - 1].nodeName == vh && b[0].removeChild(c[d - 1])) : a(Zg).append(g).prependTo(b);
					return !0
				}
				return !1
			}
			var l = /^(article|aside|blockquote|center|div|footer|header|section|pre)$/i,
				p = /^(br)$/i,
				q = /^(br|div|h1|h2|h3|h4|h5|h6|p|ol|ul)$/i;
			b = a(Rg).append(a(Zg).html(b));
			for (c(b); d(b););
			for (; k(b););
			b.children().filter(function() {
				return !p.test(this.nodeName) && a.trim(a(this).text()) == h
			}).remove();
			return b.html()
		}

		function c(b) {
			function c(a, b, e) {
				a = a || h;
				var f = b ? 0 : a.search(d);
				if (f == a.length - 1) return {
					prefix: a,
					Xa: h,
					P: h
				};
				for (var n = [], v = f, u = f, K = a.length - 1; u <= K; u++) {
					var P = a[u],
						G = e && u == K;
					if (G = G || d.test(P) && (a[u + 1] == m || u == K)) u != K && u++, n.push($g), n.push(b && 0 == v ? wu : xu), n.push(ua), n.push(a.substring(v, u + 1)), n.push(Lg), v = u + 1
				}
				return {
					prefix: 0 < f ? a.substring(0, f) : h,
					Xa: n.join(h),
					P: a.substring(v)
				}
			}
			b = a(Rg).html(b);
			b.find(as).each(function() {
				var b = a(this),
					c = a(dh);
				c.append(b.contents()).attr(hu, b.attr(hu));
				b.replaceWith(c)
			});
			a(ch).replaceAll(b.find(pm));
			b.html(b.html().replace(/(\r\n|\n|\r)/gm, ch));
			b.find(Jf).each(function() {
				for (; a(this).contents().first().is(If);) a(this).contents().first().insertBefore(a(this));
				for (; a(this).contents().last().is(If);) a(this).contents().last().insertAfter(a(this))
			});
			var d = /[\.!?]/;
			b.find(Jf).each(function() {
				var b = a(this),
					d = this.childNodes;
				1 == d.length && /^span$/i.test(d[0].nodeName) &&
					(a(d[0]).attr(hu), d = d[0].childNodes);
				if (d.length) {
					if (3 == d[0].nodeType) {
						var e = c(d[0].nodeValue, !0, 1 == d.length);
						1 < d.length ? e.Xa.length && (a(e.Xa).insertBefore(b), b.removeClass(vu).addClass(xu), d[0].nodeValue = e.P) : b.replaceWith(e.Xa)
					}
					1 < d.length && 3 == d[d.length - 1].nodeType && (e = c(d[d.length - 1].nodeValue, !1, !0), e.Xa.length && (a(e.Xa).insertAfter(b), d[d.length - 1].nodeValue = e.prefix))
				} else b.addClass(xu)
			});
			return b.html()
		}
		var d = [/<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/ig, /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/ig,
			/<head[^>]*?>(?:.|\n|\r)*?<\/head>/ig, /<iframe[^>]*?>(?:.|\n|\r)*?<\/iframe>/ig, /<img[^>]*?.*?\/?>/ig, /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/ig, /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/ig, /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/ig, /<object[^>]*?>(?:.|\n|\r)*?<\/object>/ig, /<script[^>]*?>(?:.|\n|\r)*?<\/script>/ig, /<style[^>]*?>(?:.|\n|\r)*?<\/style>/ig, /<table[^>]*?>(?:.|\n|\r)*?<\/table>/ig
		];
		a.simpleHtml = function(e, f) {
			var g;
			g = e || h;
			for (var k = 0, l; l = d[k]; k++) g = g.replace(l, h);
			e = g;
			e = b(e);
			g = /^((?:[\s\n\r]|(?:<br\/?>))+)/i;
			k = /((?:[\s\n\r]|(?:<br\/?>))+)$/i;
			l = e || h;
			l = l.replace(/((?:[\s\n\r]*<br\/?>[\s\n\r]*){2,})/gim, Og);
			l = l.replace(g, h);
			l = l.replace(k, h);
			l = a(Rg).html(l);
			var p = l.children().first(),
				q = l.children().last();
			p.length && p.html(p.html().replace(g, h));
			q.length && q.html(q.html().replace(k, h));
			e = a.trim(l.html());
			f && (e = c(e));
			return e
		}
	})(jQuery);
	(function(a) {
		function b(a, b, c) {
			for (var d = b.list(), e = 0, f; f = d[e]; e++) {
				var g = f.attr(Kr);
				if (g)
					if (n) {
						var k = [Nu, f.x, Ks, f.y, Ls].join(h);
						f = 0 != f.a ? ka + f.a + Os : h;
						k += f;
						g.css({
							transform: k,
							"-webkit-transform": k
						})
					} else q ? (k = [Mu, f.x, Ks, f.y, Js].join(h), f = 0 != f.a ? ja + f.a + Os : h, k += f, g.css({
						transform: k,
						"-moz-transform": k,
						"-ms-transform": k,
						"-o-transform": k
					})) : g.css({
						left: f.x,
						top: f.y
					})
			}
			a && a.data && a.data.ia && a.data.ia(b, c)
		}

		function c(a, b, c, e) {
			this.na = {};
			this.sb = [];
			this.fa = a;
			this.h = b;
			this.qd = void 0 !== c ? c : !0;
			this.Gf = 0;
			this.hc =
				new d(this, e || 30);
			this.zd = [new k(this), new l(this)]
		}

		function d(b, c) {
			this.df = b;
			this.Cf = c || 30;
			this.Ed = Math.floor(1E3 / this.Cf);
			this.Za = a.proxy(this.zg, this);
			this.kb = !1
		}

		function e() {
			this.h = this.fa = this.a = this.y = this.x = this.qa = this.G = this.V = 0;
			this.D = new g;
			this.ob = !1;
			this.attributes = {};
			this.C = {}
		}

		function f(a, b) {
			this.x = a;
			this.y = b
		}

		function g(a, b) {
			this.Ja = this.ga = this.y = this.x = 0;
			this.Lb(a, b)
		}

		function k(a) {
			this.canvas = a;
			this.active = !0
		}

		function l(a) {
			this.canvas = a;
			this.active = !0
		}
		var p = 0,
			q = !(a.browser.msie && 9 >
				parseInt(a.browser.version, 10)),
			n = Av in a.browser;
		a.fn.U = function(b) {
			if (v[b]) return v[b].apply(this, Array.prototype.slice.call(arguments, 1));
			if (typeof b !== Rr && b) a.error(lj + b + ga);
			else return v.init.apply(this, arguments)
		};
		var v = {
			init: function(d) {
				var e = a.extend({
					fps: 30,
					update: void 0
				}, d);
				return this.each(function() {
					var d = a(this),
						f = d.data(Yt);
					f || (f = {
							id: Zt + p++,
							canvas: new c(d.width(), d.height(), !0, e.fps),
							Ea: d,
							Lg: e
						}, d.data(Yt, f), a(window).bind(at + f.id, function() {
							var a = f.Ea;
							f.canvas.size(a.width(), a.height())
						}),
						/absolute|fixed|relative/.test(d.css(ns)) || d.css(ns, Vs), a(f.canvas).bind(Yu, {
							ia: e.update
						}, b), e.collision && a(f.canvas).bind(Xm, function(a, b, c) {
							e.collision(f.canvas, b, c)
						}), e.exceeds && a(f.canvas).bind(Io, function(a, b) {
							e.exceeds(f.canvas, b)
						}), e.start && a(f.canvas).bind(cu, function(a, b) {
							e.start(b)
						}), e.stop && a(f.canvas).bind(gu, function(a, b) {
							e.stop(b)
						}))
				})
			},
			destroy: function() {
				return this.each(function() {
					var b = a(this).data(Yt);
					b && (a(b.canvas).unbind(), b.canvas.dispose(), a(window).unbind(Ae + b.id), a(this).removeData(Yt))
				})
			},
			add: function(c, d) {
				var f = this.data(Yt);
				if (f) {
					var g = d || {},
						n = a(c);
					n.appendTo(f.Ea);
					var k = n.position(),
						l = new e;
					l.size(g.w || n.width(), g.h || n.height());
					l.position(g.x || k.left, g.y || k.top);
					(g.xV || g.yV) && l.Oa(g.xV || 0, g.yV || 0);
					l.attr(Kr, n);
					n.attr(In, l.attr(aq));
					f.canvas.add(l);
					n.css({
						position: Dl,
						left: 0,
						top: 0,
						width: l.fa,
						height: l.h
					});
					b(null, f.canvas, 0);
					return l
				}
			},
			remove: function(b) {
				var c = this.data(Yt);
				c && (b = c.canvas.na[a(b).attr(In)]) && (b.attr(Kr).remove(), c.canvas.remove(b));
				return this
			},
			canvas: function() {
				if (this.data(Yt)) return this.data(Yt).canvas
			},
			start: function() {
				return this.each(function() {
					var a = self.data(Yt);
					a && a.canvas.start()
				})
			},
			stop: function() {
				return this.each(function() {
					var a = self.data(Yt);
					a && a.canvas.stop()
				})
			}
		};
		c.prototype.add = function(b) {
			b.attr(aq, this.Gf++);
			this.na[b.attr(aq)] = b;
			this.sb = a.map(this.na, Vv());
			this.qd && this.sb.length && this.start();
			return this
		};
		c.prototype.remove = function(b) {
			delete this.na[b.attr(aq)];
			b.dispose();
			this.sb = a.map(this.na, Vv());
			this.qd && !this.sb.length && this.stop();
			return this
		};
		c.prototype.list = F(qt);
		c.prototype.extensions =
			F(Nv);
		c.prototype.size = function(a, b) {
			this.fa = a;
			this.h = b;
			return this
		};
		c.prototype.dispose = function() {
			this.stop();
			for (var a in this.na) this.na[a].dispose()
		};
		c.prototype.update = function(b) {
			for (var c in this.na) this.na[c].reset().update(b);
			c = 0;
			for (var d; d = this.zd[c]; c++) d.update(b);
			a(this).triggerHandler(Yu, [this, b]);
			return this
		};
		c.prototype.start = function() {
			var b = !this.hc.kb;
			this.hc.start();
			b && a(this).triggerHandler(cu, [this]);
			return this
		};
		c.prototype.stop = function() {
			this.hc.stop();
			a(this).triggerHandler(gu, [this]);
			return this
		};
		d.prototype.start = function() {
			if (!this.kb) return this.kb = !0, this.Hd = (new Date).getTime(), this.nd = setTimeout(this.Za, this.Ed), this
		};
		d.prototype.stop = function() {
			this.kb = !1;
			clearTimeout(this.nd);
			return this
		};
		d.prototype.zg = function() {
			var a = (new Date).getTime(),
				b = a - (this.Hd || 0);
			this.Hd = a;
			this.df.update(b);
			a = (new Date).getTime() - a;
			this.kb && (this.nd = setTimeout(this.Za, Math.max(this.Ed - a), 8))
		};
		e.prototype.attr = function(a, b) {
			return "undefined" !== typeof b ? (this.attributes[a] = b, this) : this.C[a] ||
				this.attributes[a]
		};
		e.prototype.cache = function(a, b) {
			return "undefined" !== typeof b ? (this.C[a] = b, this) : this.C[a]
		};
		e.prototype.size = function(a, b) {
			this.fa = a;
			this.h = b;
			this.cb = Math.sqrt(Math.pow(this.fa / 2, 2) + Math.pow(this.h / 2, 2));
			return this
		};
		e.prototype.reset = function() {
			this.ob = !1;
			this.C = {};
			return this
		};
		e.prototype.dispose = function() {
			this.attributes = {};
			this.C = {}
		};
		e.prototype.position = function(a, b) {
			if (void 0 === a && void 0 === b) return {
				x: this.V,
				y: this.G
			};
			this.V = a;
			this.G = b;
			a = Math.round(this.V);
			b = Math.round(this.G);
			this.ob = this.ob || this.x != a || this.y != b;
			this.x = a;
			this.y = b;
			return this
		};
		e.prototype.Da = function() {
			var a = this.cache(wm);
			void 0 === a && (a = new f(this.x + this.fa / 2, this.y + this.h / 2), this.cache(wm, a));
			return a
		};
		e.prototype.Oa = function(a, b) {
			this.D = g.Df(a / 1E3, b / 1E3)
		};
		e.prototype.speed = function(a) {
			if (void 0 === a) return 1E3 * this.D.Ja;
			this.D.Lc(a / 1E3, this.D.ga);
			return this
		};
		e.prototype.ud = function() {
			var a = this.cache(gn);
			if (a) return a;
			var b = this.fa / 2,
				c = this.h / 2;
			if (0 == this.a) a = this.Da(), a = [new g(a.x - b, a.y - c), new g(a.x -
				b, a.y + c), new g(a.x + b, a.y + c), new g(a.x + b, a.y - c)];
			else
				for (var a = [], d = Math.sqrt(Math.pow(b, 2) + Math.pow(c, 2)), e = Math.atan2(this.h, this.fa), e = [Math.PI - e, e, -e, Math.PI + e], f = 0; 4 > f; f++) a.push(new g(d * Math.cos(this.a + e[f]) + this.x + b, d * Math.sin(this.a + e[f]) + this.y + c));
			this.cache(gn, a);
			return a
		};
		e.prototype.move = function(a, b) {
			this.position(this.V + a, this.G + b);
			return this
		};
		e.prototype.ga = function(a, b) {
			this.ob = this.ob || this.qa != a;
			var c = this.qa - a;
			this.a = this.qa = a % (2 * Math.PI);
			!0 !== b && this.D.Lc(this.D.Ja, this.D.ga -
				c);
			return this
		};
		e.prototype.rotate = function(a) {
			return this.ga(this.qa + a)
		};
		e.prototype.bf = function(a, b) {
			a instanceof f && (b = a.y, a = a.x);
			var c = this.Da();
			return -(this.qa - Math.atan2(b - c.y, a - c.x))
		};
		e.prototype.Xb = function(a, b, c, d) {
			a = this.bf(a, b);
			void 0 !== c && (a = (a + c) % (2 * Math.PI));
			void 0 !== d && (a > Math.PI ? a -= 2 * Math.PI : a < -Math.PI && (a = 2 * Math.PI + a), a = Math.max(Math.min(a, d), -d), .01 > Math.abs(a) && (a = 0));
			this.rotate(a)
		};
		e.prototype.update = function(a) {
			this.move(this.D.x * a, this.D.y * a);
			return this
		};
		g.prototype.Lb = function(a,
			b) {
			void 0 !== a && void 0 !== b && (this.x = a, this.y = b, this.Ja = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2)), this.ga = Math.atan2(this.y, this.x));
			return this
		};
		g.prototype.Lc = function(a, b) {
			void 0 !== a && void 0 !== b && (this.ga = b, this.Ja = a, this.x = Math.cos(this.ga) * this.Ja, this.y = Math.sin(this.ga) * this.Ja);
			return this
		};
		g.prototype.clone = function() {
			return new g(this.x, this.y)
		};
		g.prototype.wf = function(a) {
			return this.x * a.x + this.y * a.y
		};
		g.prototype.be = function(a) {
			return this.Lb(this.x - a.x, this.y - a.y)
		};
		g.prototype.Rd =
			function() {
				return this.Lb(-this.y, this.x)
			};
		g.prototype.scale = function(a) {
			a /= this.Ja;
			this.Lb(this.x * a, this.y * a);
			return this
		};
		g.prototype.normalize = function() {
			return this.scale(1)
		};
		g.Df = function(a, b) {
			return new g(a, b)
		};
		g.Gg = function(a, b) {
			return (new g).Lc(a, b)
		};
		k.prototype.update = function() {
			if (this.active)
				for (var b = this.canvas.list(), c = 0, d; d = b[c]; c++)
					for (var e = c + 1, f; f = b[e]; e++) {
						var g = this.lf(d, f);
						d.cache(Wm, g || d.cache(Wm));
						f.cache(Wm, g || f.cache(Wm));
						g && a(this.canvas).trigger(Xm, [d, f])
					}
		};
		k.prototype.lf =
			function(a, b) {
				return 0 == a.a && 0 == b.a ? this.Cg(a, b) : this.cf(a, b) ? !1 !== this.vg(a, b) : !1
			};
		k.prototype.Cg = function(a, b) {
			return a.y <= b.y + b.h && a.x + a.fa >= b.x && a.y + a.h >= b.y && a.x <= b.x + b.fa
		};
		k.prototype.cf = function(a, b) {
			var c = a.Da(),
				d = b.Da(),
				e = a.cb + b.cb;
			return Math.pow(d.x - c.x, 2) + Math.pow(d.y - c.y, 2) < e * e
		};
		k.prototype.vg = function(a, b) {
			for (var c = a.ud(), d = b.ud(), e = [], f = 0; 4 > f; f++) {
				var g = c[f].clone().be(c[(f + 1) % 4]),
					n = d[f].clone().be(d[(f + 1) % 4]);
				e.push(g.Rd().normalize());
				e.push(n.Rd().normalize())
			}
			for (var k, l, f = 0; g =
				e[f]; f++) {
				var n = this.Xd(g, c),
					p = this.Xd(g, d);
				if (n.min > p.max || p.min > n.max) return !1;
				n = Math.min(n.max, p.max) - Math.max(n.min, p.min);
				if (void 0 === k || n < k) k = n, l = g
			}
			return {
				axis: l,
				Ig: k
			}
		};
		k.prototype.Xd = function(a, b) {
			for (var c, d, e = 0, f; f = b[e]; e++) f = a.wf(f), void 0 === c ? c = d = f : f < c ? c = f : f > d && (d = f);
			return {
				min: c,
				max: d
			}
		};
		l.prototype.update = function() {
			if (this.active)
				for (var b = this.canvas.h, c = this.canvas.fa, d = this.canvas.list(), e = 0, f; f = d[e]; e++) {
					var g = f.Da(),
						g = 0 > g.x + f.cb || g.x - f.cb > c || 0 > g.y + f.cb || g.y - f.cb > b;
					f.cache(Ho, g);
					g && a(this.canvas).trigger(Io, [self])
				}
		}
	})(jQuery);
	String.prototype.Ff || (String.prototype.Ff = function() {
		for (var a = 0, b = 0; b < this.length; ++b) a = 31 * a + this.charCodeAt(b), a %= 4294967296;
		return a
	});
	$.support.html5tags = $.browser.Sf ? 9 <= parseInt($.browser.version, 10) : $.browser.Rf ? 1.9 <= $.browser.version : !0;
	var fw = $.support,
		gw = document.getElementsByTagName(vt)[0],
		hw = gw.style.color,
		iw = !1;
	if (hw == ft) iw = !0;
	else {
		try {
			gw.style.color = ft
		} catch (a) {}
		iw = gw.style.color != hw;
		gw.style.color = hw
	}
	fw.rgba = iw;
	$.support.touch = "ontouchstart" in document.documentElement;
	(function(a) {
		function b(b) {
			return new RegExp(0 <= a.inArray(b.toLowerCase(), k) ? f.source.replace(Ig, Hg + b + ie) : e.source.replace(Ig, Hg + b + ie), cq)
		}

		function c(b, c, d) {
			c = (c || h).toLowerCase();
			for (var e in b)
				if (e.toLowerCase() == c) {
					if ("undefined" === typeof d) return !0;
					if (typeof d === D) return b[e] == d;
					if (d instanceof RegExp) return d.test(b[e]);
					if (a.isFunction(d)) return d(b[e])
				}
			return !1
		}

		function d(a) {
			this.full = a;
			this.attributes = {};
			a && d.parse(a, this)
		}
		var e = /<(\w+)[^>]*?(?:(?:>((?:.|\n|\r)*?)<\/\1>)|(?:\/>))/ig,
			f = /<(\w+)[^>]*?(?:.*?)\/?>/ig,
			g = /([\w-_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
			k = [Nl, Vl, Do, pm, Tm, Jp, jq, rq, dr, rr, ds, $m, Kq, Wt],
			l = {
				tag: h,
				attr: h,
				attrTest: void 0,
				replace: void 0,
				recurse: !0
			};
		a.tags = function(f, g) {
			var n = [],
				k = a.extend({}, l, g);
			if (!f) return void 0 !== k.replace ? h : n;
			k.tag = k.tag.toLowerCase();
			var u = k.tag ? b(k.tag) : e.global ? new RegExp(e) : e,
				u = f.replace(u, function(b) {
					var e = d.parse(b),
						f = !0;
					if (e.value && k.recurse) {
						var g = a.tags(e.value, k);
						k.replace ? e.value = g : g && g.length && a.merge(n, g)
					}
					if (f = (f = f && (!k.tag ||
							k.tag == e.name)) && (!k.attr || c(e.attributes, k.attr, k.attrTest)))
						if (n.push(e), "undefined" !== typeof k.replace) return a.isFunction(k.replace) ? k.replace(e) : k.replace;
					return b
				});
			return "undefined" !== typeof k.replace ? u : n
		};
		d.parse = function(a, c) {
			var e = c || new d;
			e.full = a;
			var f = b(/<(\w+)/.exec(a)[1]).exec(a);
			f && f.length && (e.full = a, e.name = f[1].toLowerCase(), e.value = f[2], e.attributes = {}, (f = /<\w+([^>]*)?/.exec(a)) && (f[1] || h).replace(g.global ? new RegExp(g) : g, function(a, b, c, d, f) {
				e.attributes[b] = c || d || f || h
			}));
			return e
		};
		d.prototype.encode = function() {
			var b = [];
			b.push(Fg + this.name);
			for (var c in this.attributes) {
				var d = this.attributes[c];
				b.push(m);
				b.push(c);
				null !== d && (b.push(fh), b.push(void 0 !== d ? (new String(d)).replace(/\"/g, Id) : h), b.push(ra))
			}!this.value && this.full.match(/\/>$/) ? b.push(this.full.match(/\s?\/>$/)) : 0 <= a.inArray(this.name.toLowerCase(), k) && this.full.match(/\/?>/) ? b.push(this.full.match(/\s?\/?>$/)) : (b.push(gh), b.push(this.value), b.push(Jg + this.name + gh));
			return b.join(h)
		};
		d.prototype.attr = function(a, b) {
			return "undefined" !==
				typeof b ? (this.attributes[a] = b, this) : this.attributes[a]
		}
	})(jQuery);
	(function(a) {
		a.throttle = function(a, c) {
			function d() {
				var a = k >= l ? k : k + 1;
				k = new Date - f > 50 * (Math.pow(2, a + 1) - 1) ? Math.max(0, k - 1) : a;
				g = 50 * (Math.pow(2, k) - 1);
				f = new Date
			}
			var e = null,
				f = new Date,
				g = 0,
				k = 0,
				l = Math.floor(Math.log((c || 3E4) / 50) / Math.LN2);
			return function() {
				var c = new Date - f;
				clearTimeout(e);
				if (c >= g) d(), a.apply(this, arguments);
				else {
					var k = this,
						n = arguments;
					e = setTimeout(function() {
						d();
						a.apply(k, n)
					}, g - c + 1)
				}
			}
		}
	})(jQuery);
	(function(a, b) {
		var c = [/<head[^>]*?>(?:.|\n|\r)*?<\/head>/ig, /<style[^>]*?>(?:.|\n|\r)*?<\/style>/ig, /<script[^>]*?>(?:.|\n|\r)*?<\/script>/ig, /<object[^>]*?>(?:.|\n|\r)*?<\/object>/ig, /<embed[^>]*?>(?:.|\n|\r)*?<\/embed>/ig, /<applet[^>]*?>(?:.|\n|\r)*?<\/applet>/ig, /<noframes[^>]*?>(?:.|\n|\r)*?<\/noframes>/ig, /<noscript[^>]*?>(?:.|\n|\r)*?<\/noscript>/ig, /<noembed[^>]*?>(?:.|\n|\r)*?<\/noembed>/ig, /<img[^>]*?.*?\/?>/ig];
		a.toText = function(d, e) {
			d = d || h;
			for (var f = 0, g; g = c[f]; f++) d = d.replace(g, h);
			f = a(Sg +
				d.replace(/\n/g, m) + Kg);
			f.find(so).append(ba);
			f.find(pm).replaceWith(ba);
			e !== b && f.find(e).remove();
			f = f.text().replace(/(\n|\r){2}(\s|\n|\r)+/g, ba);
			f = f.replace(/[ \t]+/g, m);
			return a.trim(f.replace(/ \n/g, aa))
		}
	})(jQuery);
	(function(a, b) {
		var c = a.browser.Mg && ze || a.browser.Sf && ve || a.browser.Rf && te || a.browser.opera && we || Lu,
			d = /([,])+/;
		a.fn.transform = function(e, f) {
			var g;
			this.each(function() {
				var k = a.style(this, c),
					l = new RegExp(e + jl),
					p = (k || h).match(l);
				if (f !== b) {
					var q = d.test(f) ? h : 0 == e.indexOf(it) ? $n : 0 == e.indexOf(rt) ? h : Is,
						q = null == f || f === h ? h : [e, ge, f, q, ie].join(h),
						k = p ? k.replace(l, q) : k + m + q;
					a.style(this, c, a.trim(k))
				} else g = p ? p[1] : h
			});
			return f !== b ? this : g
		}
	})(jQuery);
	(function(a, b) {
		function c(f, g) {
			if (g === b) return g;
			var k = e.exec(f),
				l = d.exec(f);
			return k ? (g = k[1] ? c(k[1], g) : g, g = k[2] ? c(k[2], g) : g, g = k[3] ? c(k[3], g) : g) : l ? (k = a.map((l[2] || h).split(le), function(b) {
				return b && a.trim(b)
			}), (l = l[1] ? g[l[1]] : g) && a.isFunction(l) ? l.apply(g, k.length ? k : b) : b) : g[f]
		}
		var d = /^(.*)\(([^\(\)]*)\)$/,
			e = /^(.*)\[([^\]]+)\](.*)$/;
		a.valueOrDefault = function(a, d, e) {
			e = e || window;
			for (var l = a.split(Ae);
				(a = l.shift()) && e;) e = c(a, e);
			return l.length || e === b ? d : e
		}
	})(jQuery);
	(function(a) {
		function b(b) {
			b = b.replace(/'|"/g, le).split(le);
			return a.grep(b, Vv())
		}

		function c() {
			var b = [];
			a.each(f, function(a, c) {
				e[c] || (b.push(c.replace(/\s/g, ke)), e[c] = !0)
			});
			var c = b.join(Tv);
			c && a(zp).append([Yg, c, ta].join(h));
			f = []
		}
		var d = [mh, nh, ph, qh, xh, Bh, Ch, Dh, Fh, Gh, Hh, Ih, Jh, Kh, Lh, Mh, Nh, Oh, Ph, Qh, Rh, Sh, Vh, Wh, Xh, Yh, di, gi, hi, li, ni, qi, ri, si, ti, ui, vi, wi, xi, yi, zi, Ai, Bi, Di, Hi, Ji, Ki, Ni, Oi, Pi, ej, gj, kj, oj, qj, sj, tj, Aj, Dj, Gj, Hj, Nj, Oj, Pj, Rj, Sj, ck, ek, ik, jk, Ck, Hk, Mk, Nk, Sk, Vk, Wk, $k, bl, el],
			e = {},
			f = [];
		a.pe = function(g) {
			g =
				a.isArray(g) ? g : [g];
			a.each(g, function(g, l) {
				var p = b(l);
				a.merge(f, a.grep(p, function(b) {
					return !e[b] && 0 <= a.inArray(b, d)
				}));
				setTimeout(c, 0)
			})
		}
	})(jQuery);
	var J = window.blogger = window.blogger || {};
	window.console || (window.console = {
		log: E()
	});
	Object.keys = Object.keys || function() {
		var a = Object.prototype.hasOwnProperty,
			b = !{
				toString: null
			}.propertyIsEnumerable(Gu),
			c = [Gu, Fu, nv, xp, uq, Bs, en],
			d = c.length;
		return function(e) {
			if (typeof e != Rr && typeof e != ip || null === e) throw new TypeError("Object.keys called on a non-object");
			var f = [],
				g;
			for (g in e) a.call(e, g) && f.push(g);
			if (b)
				for (g = 0; g < d; g++) a.call(e, c[g]) && f.push(c[g]);
			return f
		}
	}();

	function L() {}
	L.prototype.init = function(a, b) {
		this.value = a;
		this.start = b;
		return this
	};
	L.prototype.invalid = function(a) {
		a && (this.ld = a);
		return this.ld || !1
	};
	L.prototype.apply = E();
	var jw = /([^\s=]+)\s*=\s*(\'[^<\']*\'|\"[^\"]*\"|[\S]*)/g,
		kw = /([^\s=]+)\s*=\s*(\'[^\']*\'|\"[^\"]*\")/g;
	L.prototype.extractAttributes = function(a, b) {
		for (var c = lw(!1 === b ? jw : kw), d, e = -1; d = c.exec(a);)
			if (e++, e += d[0].length, d[1] !== h && d[2] !== h) {
				var f = d[2].replace(/^(\'|")(.*)(\1)$/, Dd);
				this.attr(d[1], f)
			} else this.invalid(Fi);
		e != a.length && this.invalid(Gi)
	};
	L.prototype.attr = function(a, b) {
		"undefined" !== typeof b && (this.attributes = this.attributes || {}, this.attributes[a] = typeof b === D ? b : h + b);
		if (this.attributes) return this.attributes[a]
	};
	L.prototype.resolveAttr = function(a, b) {
		var c = this.attr(a);
		if (c) {
			if (mw.exec(c)) return b ? nw((new ow).init(c).apply(b)) : void 0;
			if (pw.exec(c)) return b ? nw((new qw).init(c).apply(b)) : void 0;
			c = c.replace(lw(mw), function(a) {
				a = b ? (new ow).init(a).apply(b) : void 0;
				return void 0 !== a ? a : h
			});
			c = c.replace(lw(pw), function(a) {
				a = b ? (new qw).init(a).apply(b) : void 0;
				return void 0 !== a ? a : h
			})
		}
		return nw(c)
	};

	function nw(a) {
		return a === Tu ? !0 : a === Mo ? !1 : a
	}

	function lw(a) {
		if (a.global) return new RegExp(a);
		a = a.source;
		a = a.replace(/^\^/, h).replace(/\$$/, h);
		return new RegExp(a, jp)
	};

	function rw() {
		this.gc = []
	}
	$.extend(rw.prototype, L.prototype);
	var sw = /^{block:([^\s}]+)(?:\s(.+))?}$/,
		tw = /^(\w+)s$/,
		uw = /^(?:Has|If(?!Not))(.+)$/,
		vw = /^(?:IfNot)(.+)$/;
	rw.prototype.init = function(a, b) {
		this.value = a;
		this.start = b;
		var c = sw.exec(this.value);
		(this.tag = c && c[1]) ? c[2] && this.extractAttributes(c[2]): this.invalid(nj);
		return this
	};
	rw.prototype.children = F("gc");
	rw.prototype.add = function(a) {
		this.gc.push(a)
	};
	rw.prototype.apply = function(a) {
		var b = ww(this, a),
			c = [];
		if (b)
			if (b instanceof Array)
				for (var d = 0, e = b.length; d < e; d++) {
					var f = new M(b[d], a),
						g = f,
						k = e,
						l = d + 1;
					g.scope(Fj, 1 == l % 2);
					g.scope($h, 0 == l % 2);
					g.scope(Cj, l);
					g.scope(ci, 1 == l);
					g.scope(aj, l == k);
					k = (k = this.tag.match(tw)) && k[1] || this.tag;
					g.scope(k + l, !0);
					g.scope(k, g.context);
					xw(this, f);
					c = c.concat(yw(this, f))
				} else this.attributes && (a = new M(a.context, a), xw(this, a)), c = c.concat(yw(this, a));
		return c.join(h)
	};

	function xw(a, b) {
		if (a.attributes)
			for (var c in a.attributes) b.scope(c, a.resolveAttr(c, b))
	}

	function ww(a, b) {
		var c = a.tag,
			d = b.data(c);
		return "undefined" !== typeof d ? d : vw.test(c) ? (c = vw.exec(c)[1], d = b.data(c), "undefined" === typeof d || 0 == d) : uw.test(c) ? (c = uw.exec(c)[1], d = b.data(c), "undefined" === typeof d ? !1 : 0 != d) : b.data(c)
	}

	function yw(a, b) {
		for (var c = [], d = 0, e; e = a.gc[d]; d++) c.push(e.apply(b));
		return c
	};

	function zw() {}
	$.extend(zw.prototype, L.prototype);
	var Aw = /^{\/(?:block|template):([^\s}]+)}$/;
	zw.prototype.init = function(a, b) {
		this.value = a;
		this.start = b;
		var c = Aw.exec(this.value);
		(this.tag = c && c[1]) || this.invalid(nj);
		return this
	};

	function Bw(a) {
		this.ld = a
	}
	$.extend(Bw.prototype, L.prototype);

	function Cw() {}
	$.extend(Cw.prototype, L.prototype);
	Cw.prototype.apply = F(mv);

	function qw() {}
	$.extend(qw.prototype, L.prototype);
	var pw = /^{(\w+):(.*)}$/;
	qw.prototype.init = function(a, b) {
		this.value = a;
		this.start = b;
		var c = pw.exec(this.value);
		this.scope = c && c[1];
		this.term = c && c[2];
		this.scope ? this.term ? (c = this.term.search(kw), 0 < c && (this.extractAttributes(this.term.substr(c), !0), this.term = this.term.substring(0, c).replace(/\s+$/, h))) : this.invalid(zj) : this.invalid(yj);
		this.name = this.scope + Cg + this.term;
		return this
	};
	qw.prototype.apply = function(a) {
		if (!this.invalid()) {
			var b = this.scope + Cg + this.term,
				c = N().template(b);
			if (c && !a.scope(pl + b)) {
				var d = new M(a.context, a);
				d.scope(pl + b, !0);
				for (var e in this.attributes) d.scope(e, this.resolveAttr(e, a));
				return c.apply(d)
			}
			return (c = N().generator(b)) ? c.call(this, a) : a.data(b)
		}
	};

	function Dw(a) {
		this.name = a;
		this.lc = []
	}
	$.extend(Dw.prototype, L.prototype);
	var Ew = /^{template:([^\s}]+)(?:\s(.+))?}$/;
	H = Dw.prototype;
	H.init = function(a, b) {
		this.value = a;
		this.start = b;
		var c = Ew.exec(this.value);
		(this.name = this.tag = c && c[1]) ? c[2] && this.extractAttributes(c[2]): this.invalid(mj);
		return this
	};
	H.children = F("lc");
	H.add = function(a) {
		this.lc.push(a)
	};
	H.raw = function(a) {
		"undefined" !== typeof a && (this.pg = a);
		return this.pg
	};
	H.find = function(a, b, c) {
		function d(c) {
			if (c && c.children)
				for (var g = 0, k; k = c.children()[g]; g++) k.tag == a && (k instanceof rw || b) && e.push({
					parent: c,
					child: k
				}), d(k)
		}
		var e = [];
		d(c || this);
		return e
	};
	H.apply = function(a) {
		a = a instanceof M ? a : new M(a);
		for (var b = [], c = 0, d; d = this.lc[c]; c++) b.push(d.apply(a));
		return Fw(this, b.join(h))
	};

	function Fw(a, b, c) {
		if ((c = c || a.attr(Ev)) && c != ws) {
			if (c == no) return b.replace(/\s/g, h);
			if (c == Su) return b.replace(/^\s+/, h).replace(/\s+$/, h);
			if (c == Um || c == xs || c == Vm) {
				b = b.replace(/\n([\t ]+)/g, aa);
				c == Um && (b = b.replace(/\n/g, m));
				b = b.replace(/\t/g, m);
				b = b.replace(/ ( )+/g, m);
				b = b.split(aa);
				for (var d = 0, e = b.length; d < e; d++) b[d] = b[d].replace(/^\s+/, h).replace(/\s+$/, h);
				b = b.join(aa);
				return c == Vm ? Fw(a, b.replace(/\n[\s]+/g, aa), Su) : b
			}
		} else return b
	};

	function ow() {}
	$.extend(ow.prototype, L.prototype);
	var mw = /^{([^\s:}]+)(?:\s(.+))?}$/,
		Gw = [{
			prefix: "JSPlaintext",
			transform: function(a) {
				a = $(Sg + a + Kg).text();
				return [fe, a ? a.replace(/\'/g, Jd) : h, fe].join(h)
			}
		}, {
			prefix: "Plaintext",
			transform: function(a) {
				return $(Sg + a + Kg).text()
			}
		}, {
			prefix: "URLEncoded",
			transform: function(a) {
				return encodeURIComponent(a)
			}
		}, {
			prefix: "JS",
			transform: function(a) {
				return [fe, a ? a.replace(/\'/g, Jd) : h, fe].join(h)
			}
		}, {
			prefix: "HTMLEscaped",
			transform: function(a) {
				return (a || h).replace(/&/g, Nd).replace(/"/g, Yd).replace(/'/g, Kd).replace(/</g, Sd).replace(/>/g,
					Qd)
			}
		}];
	ow.prototype.init = function(a, b) {
		this.value = a;
		this.start = b;
		var c = mw.exec(this.value);
		(this.variable = this.tag = c && c[1]) ? c[2] && this.extractAttributes(c[2]): this.invalid(nj);
		if (this.tag)
			for (var c = 0, d; d = Gw[c]; c++)
				if (0 === this.tag.indexOf(d.prefix)) {
					this.transform = d.prefix;
					this.variable = this.tag.substr(d.prefix.length);
					break
				}
		this.name = this.variable;
		return this
	};
	ow.prototype.apply = function(a) {
		if (this.variable) {
			var b = N().template(this.tag);
			if (b && !a.scope(pl + this.tag)) {
				var c = new M(a.context, a);
				c.scope(pl + this.tag, !0);
				for (var d in this.attributes) c.scope(d, this.resolveAttr(d, a));
				return b.apply(c)
			}
			c = (b = N().generator(this.variable)) ? b.apply(this, [a]) : a.data(this.variable);
			b || void 0 !== c || this.variable != Yk || (c = a.context);
			a: if (a = c, this.transform && a)
				for (b = 0; c = Gw[b]; b++)
					if (c.prefix === this.transform) {
						a = c.transform(a);
						break a
					}
			return a
		}
	};

	function Hw(a) {
		this.source = typeof a === D ? a : h;
		this.length = this.source.length;
		this.column = this.line = this.ma = 0
	}
	H = Hw.prototype;
	H.hasNext = function() {
		return this.ma < this.length
	};
	H.next = function() {
		if (this.hasNext()) {
			var a = this.source.charAt(this.ma);
			this.ma++;
			a.charAt(0) == aa ? (this.line++, this.column = 0) : this.column++;
			return a
		}
	};
	H.consume = function(a) {
		if (this.hasNext()) {
			for (var b = [], c = 0; c < a; c++) b.push(this.next());
			return b.join(h)
		}
	};
	H.remainder = function() {
		if (this.hasNext()) {
			for (var a = []; this.hasNext();) a.push(this.next());
			return a.join(h)
		}
	};
	H.peek = function(a) {
		a = a || this.ma;
		if (a < this.length && 0 <= a) return this.source.charAt(a)
	};
	H.match = function(a, b) {
		var c = this.source.substr(b || this.ma);
		if (typeof a === D) {
			if (c.slice(0, a.length) === a) return a
		} else if (a instanceof RegExp && 0 === c.search(a)) return c.match(a)[0]
	};
	H.search = function(a, b) {
		var c = this.source.substr(b || this.ma);
		if (typeof a === D) return c.indexOf(a);
		if (a instanceof RegExp) return c.search(a)
	};

	function M(a, b) {
		this.ancestor = b;
		this.Pc = {};
		var c = N().converter(a);
		this.context = c ? c(a, this) : a
	}
	var Iw = /(\w+):([^}]+)/;
	M.prototype.scope = function(a, b) {
		"undefined" !== typeof b && (this.Pc[a] = b);
		return "undefined" !== typeof this.Pc[a] ? this.Pc[a] : this.ancestor && this.ancestor.scope(a)
	};
	M.prototype.value = function(a) {
		var b = this.context && this.context[a];
		"undefined" === typeof b && (b = this.scope(a));
		if ("undefined" === typeof b && 0 <= a.indexOf(Ae)) {
			a = a.split(Ae);
			for (var c = a.shift(), d = this.context[c] || this.scope(c);
				(c = a.shift()) && d;)
				if (d = d[c], 0 == a.length) b = d;
				else if (!d) break
		}
		return b
	};
	M.prototype.data = function(a, b) {
		return Iw.test(a) ? this.scope(a, b) : this.value(a)
	};

	function Jw() {
		this.C = {};
		this.Nb = [];
		this.Bc = []
	}
	var Kw;
	Jw.prototype.Se = !1;

	function N() {
		Kw || (Kw = new Jw);
		return Kw
	}
	Jw.prototype.template = function(a, b) {
		"undefined" !== typeof b && (this.C[a] = this.compile(b));
		return this.C[a]
	};
	Jw.prototype.generator = function(a, b) {
		if (b && a) {
			var c = {
				test: a,
				generator: b
			};
			this.Bc.push(c);
			this.Bc.sort(function(a, b) {
				return (typeof b.test === D ? b.test.length : 0) - (typeof a.test === D ? a.test.length : 0)
			});
			return c.generator
		}
		if (a && typeof a === D)
			for (var c = 0, d; d = this.Bc[c]; c++)
				if (typeof d.test === D && 0 === a.indexOf(d.test) || d.test instanceof RegExp && d.test.test(a)) return d.generator
	};
	Jw.prototype.converter = function(a, b) {
		for (var c = -1, d = 0, e; e = this.Nb[d]; d++)
			if (a instanceof e.type) {
				c = d;
				break
			}
		a && "undefined" !== typeof b && (0 <= c && this.Nb.splice(c, 1), c = this.Nb.push({
			type: a,
			converter: b
		}) - 1);
		return 0 <= c ? this.Nb[c].converter : void 0
	};
	var Lw = /^{\/?([\w-]+(:[\w\-]+)?(?:(?:[\w:\-\'\"= \.#]*[^\s])|(\s*([^\s=]+)\s*=\s*(\'[^\']*\'|\"[^\"]*\"))*)?)}/,
		Mw = /{(\w+:)/;
	Jw.prototype.compile = function(a, b) {
		var c = new Hw(a),
			d = "undefined" !== typeof b ? b : !0,
			e = new Dw;
		e.raw(a);
		for (var f = e, g = [e], k = null; k = Nw(c);) {
			var l = null;
			k.type == er ? l = Cw : 0 === k.value.indexOf(Rv) ? l = rw : 0 === k.value.indexOf(Pv) ? l = zw : 0 === k.value.indexOf(Sv) ? l = Dw : 0 === k.value.indexOf(Qv) ? l = zw : 0 === k.value.search(Mw) ? l = qw : l = ow;
			k = (new l).init(k.value, k.start);
			if (k instanceof rw || k instanceof Dw) {
				if (Jw.Se)
					for (l = 0; l < g.length; l++) {
						if (g[l].tag == k.tag) {
							k.invalid(Eh);
							break
						}
					} else if (f.tag == k.tag) {
						d && Ow(this, g.pop(), c);
						f = g[g.length -
							1];
						continue
					}
				f.add(k);
				f = k;
				g.push(f)
			} else k instanceof zw ? f.tag == k.tag ? (d && Ow(this, g.pop(), c), f = g[g.length - 1]) : (l = new Bw(Uk), l.init(k.value, k.start), f.add(l)) : f.add(k)
		}
		return e
	};

	function Ow(a, b, c) {
		b instanceof Dw && b.name && (b.raw(c.source.substring(b.start || 0, c.ma)), a.C[b.name] = b)
	}

	function Nw(a) {
		if (a && a.hasNext()) {
			var b = a.ma,
				c = a.match(Lw);
			if (c) return {
				type: Iu,
				value: a.consume(c.length),
				start: b
			};
			for (c = []; a.hasNext();) {
				if (a.peek() === Ov)
					if (a.match(Lw)) break;
					else if (a.match(Lw, a.ma + 1)) {
					a.next();
					c.push(a.consume(a.match(Lw).length));
					continue
				}
				c.push(a.next())
			}
			return {
				type: er,
				value: c.join(h),
				start: b
			}
		}
	};
	window.templates = window.templates || N;

	function Pw(a) {
		this.source = a || window._WidgetManager && $.valueOrDefault(nl)
	}
	Pw.prototype.get = function() {
		if (!this.source || 0 == Object.keys(this.source).length) return {
			ready: !1
		};
		var a = {
			ready: !0
		};
		if (this.source.blog) {
			var b = this.source.blog,
				c = $.valueOrDefault(Tt, void 0, this.source),
				d = this.source.view,
				e = this.source.widgets,
				f = function(a) {
					return {
						"font:Text": a.page_text_font,
						"color:Text": a.page_text_color,
						"image:Background": a.body_background,
						"color:Background": a.body_background_color,
						"color:Header Background": a.header_background_color,
						"color:Primary": a.primary_color,
						"color:Menu Text": a.menu_text_color,
						"font:Menu": a.menu_font,
						"font:Link": a.link_font,
						"color:Link": a.link_color,
						"color:Link Visited": a.link_visited_color,
						"color:Link Hover": a.link_hover_color,
						"font:Blog Title": a.blog_title_font,
						"color:Blog Title": a.blog_title_color,
						"font:Blog Description": a.blog_description_font,
						"color:Blog Description": a.blog_description_color,
						"font:Post Title": a.post_title_font,
						"color:Post Title": a.post_title_color,
						"color:Ribbon": a.ribbon_color,
						"color:Ribbon Hover": a.ribbon_hover_color
					}
				};
			if (b) {
				a.blog_locale = b.locale;
				a.blog_title = b.title;
				a.blog_id = b.blogId;
				a.comments_enabled = !0;
				a.comments_mtd = 2;
				a.feeds_api = 2;
				a.analytics_id = b.analyticsAccountNumber;
				a.adsense_client_id = b.adsenseClientId;
				a.adsense_host_id = Es;
				a.blog_url = b.homepageUrl ? O.decode(b.homepageUrl).encode(!1, !1) : w;
				if (b.bloggerUrl) {
					var g = O.decode(b.bloggerUrl);
					g.scheme = Tp;
					a.blogger_base = g.encode()
				}
				a.canonical_url = b.canonicalUrl;
				a[ys] = !!b.isPrivateBlog;
				a.is_mobile = !!b.isMobileRequest;
				a.is_tablet = (!!b.isMobileRequest || $.support.touch) && 768 <= window.screen.width &&
					1600 >= window.screen.width;
				var k = $.valueOrDefault(jm);
				a.filter_permalink = $.support.touch && k == Bm;
				a.plusone_api_src = b.plusOneApiSrc;
				a.sf = b.sf;
				a.pageType = b.pageType;
				a.postId = b.postId;
				a.pageId = b.pageId
			}
			c && (a.template_styles = f(c), a.additional_css = $.valueOrDefault(St, void 0, this.source));
			d && (k = $.valueOrDefault(jm), a.views = $.map(d, function(a) {
				return {
					name: a.name,
					url: a.url,
					selected: a.name == k
				}
			}));
			e && (a.widget_settings = {}, $.each(e, function(b, c) {
				a.widget_settings[b] = c.settings
			}), a.widget_ids = $.map(e, function(c,
				d) {
				if (/^PageList\d+$/.test(d)) {
					var e = $.map(c.links, function(a) {
						return {
							title: a.title,
							url: a.href,
							page_id: a.id
						}
					});
					a.pages || (a.pages = []);
					a.pages = $.merge(a.pages, e)
				} else if (/^Blog\d+$/.test(d)) {
					if (e = c.previewPost) {
						var f = new Qw;
						f.id = e.id;
						f.url = e.url;
						f.title = e.title;
						f.body = e.body;
						var g = e.timestampISO8601;
						f.published = (new Date).fromISOString(g);
						f.updated = (new Date).fromISOString(g);
						f.commentCount = e.numComments;
						f.allowComments = e.allowComments;
						f.author = new Rw(e.author, e.authorUrl, $.valueOrDefault(Rl, void 0,
							e));
						f.tags = $.map(e.labels || [], function(a) {
							return a.name
						});
						a.preview = f
					}(e = c.navMessage) && b && b.pageType == Go && (a.error = e)
				}
				return d
			}));
			if (c = $.valueOrDefault(em)) {
				var l = I();
				c.addChannelToOuter(ou);
				c.registerService(ou, Lt, function(a) {
					l.settings.template_styles = f(a.vars);
					l.cache(sp, null);
					l.notify(nu)
				});
				c.connect(ou)
			}
		} else $.extend(a, this.source), a.views = J.views;
		a.blog_url = a.blog_url || O.decode().root();
		a.canonical_url = a.canonical_url || O.decode().encode(!1, !1);
		c = O.decode();
		if (void 0 !== c.param(Lv) || c.fragment ==
			Lv) a.headless = !0;
		return a
	};
	var Sw = {
		group: function(a, b) {
			var c = Sw.categorizers[b];
			if (!c) return null;
			var d = Sw.qf(c, a, b);
			d.sort(function(a, b) {
				return a.unknown || b.unknown ? a.unknown ? 1 : -1 : c.compare(a, b)
			});
			return d
		},
		qf: function(a, b, c) {
			for (var d = [], e = 0, f; f = b[e]; e++)
				if (c == lu)
					for (var g = a.pf(f), k = 0, l; l = g[k]; k++) {
						for (var p = !0, q = 0, n; n = d[q]; q++)
							if (n.caption == l.caption) {
								p = !1;
								n.addItem(e, f);
								break
							}
						p && (d.push(l), l.addItem(e, f))
					} else {
						l = null;
						for (g = 0; n = d[g]; g++)
							if (a.Tb(n, f)) {
								l = n;
								break
							}
						l || (l = a.uc(f), d.push(l));
						l.addItem(e, f)
					}
				return d
		},
		categorizers: {
			author: {
				Tb: function(a,
					b) {
					return b.author ? a.attr(mv) == b.author.name : a.unknown
				},
				uc: function(a) {
					return a.author ? new Tw(a.author.name, {
						type: Ql,
						value: a.author.name
					}) : new Tw(Wu, null, !0)
				},
				compare: function(a, b) {
					return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
				}
			},
			tag: {
				Tb: function(a, b) {
					if (b.tags && 0 < b.tags.length) {
						for (var c = 0; c < b.tags.length; c++)
							if (a.attr(mv) == b.tags[c]) return !0;
						return !1
					}
					return a.unknown
				},
				pf: function(a) {
					var b = [];
					a.tags && 0 < a.tags.length ? $.each(a.tags, function(a, d) {
						b.push(new Tw(d, {
							type: lu,
							value: d
						}))
					}) : b.push(new Tw(uj,
						null, !0));
					return b
				},
				compare: function(a, b) {
					return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
				}
			},
			published: {
				Tb: function(a, b) {
					return b.published ? a.attr(Kv) == b.published.getFullYear() && a.attr(xr) == b.published.getMonth() : a.unknown
				},
				uc: function(a) {
					return a.published ? new Tw([Ii, bi, ij, oh, jj, Mi, Li, rh, Fk, Ej, Bj, Th][a.published.getMonth()] + m + a.published.getFullYear(), {
						type: Fs,
						year: a.published.getFullYear(),
						month: a.published.getMonth()
					}) : new Tw(Wu, null, !0)
				},
				compare: function(a, b) {
					return a.attr(Kv) == b.attr(Kv) ?
						a.attr(xr) < b.attr(xr) ? 1 : -1 : a.attr(Kv) < b.attr(Kv) ? 1 : -1
				}
			},
			service: {
				Tb: function(a, b) {
					var c = b instanceof Qw && yh || b instanceof Uw && mi || h;
					return c ? a.attr(mv) == c : a.unknown
				},
				uc: function(a) {
					return (a = a instanceof Qw && yh || a instanceof Uw && mi || h) ? new Tw(a, {
						type: Kt,
						value: a
					}) : new Tw(Wu, null, !0)
				},
				compare: function(a, b) {
					return a.caption.toLowerCase() > b.caption.toLowerCase() ? 1 : -1
				}
			}
		}
	};

	function Tw(a, b, c) {
		this.caption = a;
		this.He = [];
		this.pd = $.extend({}, b);
		this.unknown = c ? !0 : !1
	}
	Tw.prototype = {
		attr: function(a, b) {
			null != b && (this.pd[a] = b);
			return this.pd[a]
		},
		addItem: function(a, b) {
			this.items().push({
				index: a,
				item: b
			})
		},
		values: function() {
			return $.map(this.items(), function(a) {
				return a.item
			})
		},
		indexes: function() {
			return $.map(this.items(), function(a) {
				return a.index
			})
		},
		items: F("He"),
		count: function() {
			return this.items().length
		}
	};

	function Vw() {
		this.Oc = {}
	}
	var Ww;
	Vw.prototype.create = function(a) {
		var b = a.match(/([^\d]*)(\d*)$/);
		a = b[1];
		b = b[2] !== h ? b[2] : void 0;
		return this.Oc[a] && new this.Oc[a](b)
	};
	Vw.prototype.register = function(a, b) {
		a && b && (this.Oc[a] = b)
	};

	function Xw(a) {
		this.settings = $.extend({}, Yw, a);
		this.B = [];
		this.wb = []
	}
	var Yw = {
		width: 500,
		rowHeight: 200,
		margin: 2
	};
	H = Xw.prototype;
	H.photos = F("B");
	H.rows = F("wb");
	H.positions = function() {
		for (var a = this.settings.margin, b = [], c = 0, d = 0, e; e = this.wb[d]; d++) {
			for (var c = c + a, f = 0, g = 0, k; k = e[g]; g++) f += a, b.push({
				top: c,
				left: f,
				width: k.width,
				height: k.height,
				photo: k
			}), f += k.width + a;
			c += e[0].height + a
		}
		return b
	};
	H.add = function(a) {
		return this.insertAt(a)
	};
	H.insertAt = function(a, b) {
		void 0 === b || b == this.B.length ? $.isArray(a) ? this.B = this.B.concat(a) : this.B.push(a) : $.isArray(a) ? this.B = this.B.slice(0, b).concat(a, this.B.slice(b)) : this.B.splice(b, 0, a);
		return this
	};
	H.insertBefore = function(a, b) {
		var c = b instanceof Zw ? $w(this, b) : b;
		return this.insertAt(a, 0 <= c ? c : void 0)
	};
	H.insertAfter = function(a, b) {
		var c = b instanceof Zw ? $w(this, b) : b;
		return this.insertAt(a, 0 <= c ? c + 1 : void 0)
	};

	function $w(a, b) {
		for (var c = 0, d; d = a.B[c]; c++)
			if (d.url == b.url) return c;
		return -1
	}
	H.layout = function(a) {
		a = this.settings.width = a || this.settings.width;
		this.wb = [];
		for (var b = this.B; b.length;) {
			var c, d = b,
				e = a;
			c = [];
			for (var f = this.settings.margin, g = this.settings.rowHeight, k = 0, l = 0, p = void 0;
				(p = d[l]) && k < e; l++) c.push(p.clone()), k += p.size().toHeight(g).width + 2 * f;
			k > e && (l = 2 * f * c.length, g = Math.floor((e - l) / (k - l) * g));
			for (l = d = 0; p = c[l]; l++) d += p.size(p.size().toHeight(g)).width + 2 * f;
			if (k >= e)
				for (e -= d; 0 != e;)
					for (f = 0 < e ? 1 : -1, l = c.length - 1; 0 <= l && 0 != e; l--) c[l].width += f, e -= f;
			if (c.length) this.wb.push(c), b = b.slice(c.length);
			else break
		}
		return this.wb
	};
	var O = {
		jd: /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
		Re: /^(?:(([^:\/?#]+):){1}(\/\/)?)|(\/\/)/,
		wc: function() {
			return document.URL
		},
		isCrossDomain: function(a) {
			var b = O.decode();
			a = a instanceof Q ? a : new Q(a);
			return b.authority != a.authority
		},
		isSamePage: function(a, b) {
			var c = O.decode(),
				d = a instanceof Q ? a : new Q(a);
			return (!!b || c.authority == d.authority) && c.path == d.path
		},
		decode: function(a) {
			return new Q(a || O.wc())
		},
		authority: function(a, b) {
			var c = a || O.wc(),
				d = c.match(/^(https?:\/\/)/),
				d = d ? d[0] :
				Pp,
				c = c.replace(d, h);
			if (c = /([^\/]+)\/?(.*)/.exec(c)) return d + (0 > c[1].indexOf(Ae) && b ? c[1] + Ae + b : c[1]).toLowerCase()
		},
		rewritePath: function(a) {
			a = a instanceof Q ? a : new Q(a);
			if (window.history.pushState) try {
				return O.wc() != a.encode() && window.history.pushState(null, h, a.encode()), !0
			} catch (b) {}
			a = ya + (O.isCrossDomain(a) ? a.encode(!1, !1) : a.path);
			return window.location.hash != a ? (window.location.hash = a, !0) : !1
		},
		decodePath: function(a) {
			a = O.decode(a);
			if (a.fragment && a.fragment[0] == qa) {
				var b = new Q(a.fragment.substr(1));
				b.authority ||
					(b.scheme = a.scheme, b.authority = a.authority);
				a = b
			}
			return new Q(a.encode(!1, !1))
		}
	};

	function Q(a) {
		this.url = null !== a ? a instanceof Q ? a.encode() : a : void 0;
		this.params = {};
		this.url && ax(this.url, this)
	}

	function ax(a, b) {
		var c = b || new Q,
			d = O.Re.exec(a) ? O.jd.exec(a) : O.jd.exec(Sf + a);
		if (d && d.length && (c.scheme = d[2], c.authority = d[4] && d[4].toLowerCase(), c.path = d[5], c.query = d[7], c.params = {}, c.fragment = d[9], c.query))
			for (var d = c.query.replace(/&amp;/g, Hd).split(Hd), e = 0, f = d.length; e < f; e++)
				if (d[e]) {
					var g = d[e].split(eh);
					c.params[g[0]] = g[1] || h
				}
		return c
	}
	Q.prototype.encode = function(a, b, c) {
		a = "undefined" !== typeof a ? a : !0;
		b = "undefined" !== typeof b ? b : !0;
		var d;
		if (c) d = $.param(this.params);
		else {
			c = [];
			for (d in this.params) void 0 !== this.params[d] ? c.push(d + eh + this.params[d]) : c.push(d);
			d = c.join(Hd)
		}
		return [this.scheme ? this.scheme + Cg : h, this.authority ? Sf + this.authority : h, this.path, a && d ? hh + d : h, b && this.fragment ? xa + this.fragment : h].join(h)
	};
	Q.prototype.root = function() {
		return [this.scheme ? this.scheme + Cg : h, this.authority ? Sf + this.authority : h].join(h)
	};
	Q.prototype.param = function(a, b) {
		return "undefined" !== typeof b ? (this.params[a] = b, this) : this.params[a]
	};
	Q.prototype.normalize = function() {
		this.scheme = this.scheme || O.decode().scheme;
		this.path = this.path || w;
		return this
	};

	function bx() {
		this.B = []
	}
	bx.prototype.add = function(a) {
		a = $.isArray(a) ? a : [a];
		for (var b = 0, c; c = a[b]; b++) this.B.push(new Zw(c));
		return this
	};
	bx.prototype.load = function(a) {
		function b() {
			setTimeout(function() {
				var b = f.photos();
				$(f).triggerHandler(fr, [b]);
				a && a(b)
			}, 0)
		}
		for (var c = [], d = 0, e; e = this.B[d]; d++) e.loaded || e.invalid || c.push(e.load());
		var f = this;
		c.length ? $.when.apply(window, c).always(b) : b();
		return this
	};
	bx.prototype.photos = function() {
		return $.grep(this.B, function(a) {
			return a.loaded && !a.invalid
		})
	};

	function cx(a) {
		this.settings = $.extend({}, dx, a);
		this.B = [];
		this.fd = 0
	}
	var dx = {
		thumbnailHeight: 150
	};
	H = cx.prototype;
	H.add = function(a, b) {
		var c = new Zw(R.full(a), {
			width: b && b.width,
			height: b && b.height
		});
		this.B.push(c);
		if (b)
			for (var d in b) d != Fv && d != Cp && c.attr(d, b[d]);
		c.attr(Ei, this.B.length - 1);
		c.attr(Cj, this.B.length);
		c.attr(hk, R.canResize(a));
		if (c.attr(hk)) {
			d = new Zw(R.thumbnail(a, 2 * this.settings.thumbnailHeight, !1));
			c.associate(d, Du);
			$(this).triggerHandler(Fl, [c]);
			var e = this;
			d.load(function() {
				e.ready_(c)
			})
		} else $(this).triggerHandler(Fl, [c]), this.ready_(c);
		return c
	};
	H.ready_ = function(a) {
		var b = this;
		setTimeout(function() {
			$(b).triggerHandler(Rs, [a]);
			for (var c = b.fd, d; d = b.B[c]; c++)
				if (b.fd = c, d.attr(hk)) {
					if (!d.aspect()) break;
					$(b).triggerHandler(fn, [d])
				}
		}, 0)
	};
	H.photos = function(a, b) {
		return $.map(this.B, function(c) {
			var d = !0;
			!0 === a ? d = void 0 !== c.aspect() : void 0 !== a && (d = c.attr(a) == b);
			return d ? c : null
		})
	};
	H.eq = function(a) {
		if (0 <= a && a < this.B.length) return this.B[a]
	};
	H.size = function() {
		return this.B.length
	};

	function Zw(a, b) {
		this.url = a;
		this.attributes = {};
		this.invalid = this.loaded = !1;
		this.width = b && b.width;
		this.height = b && b.height;
		this.W = {}
	}
	H = Zw.prototype;
	H.clone = function() {
		var a = new Zw(this.url);
		a.loaded = this.loaded;
		a.invalid = this.invalid;
		a.width = this.width;
		a.height = this.height;
		a.attributes = $.extend({}, this.attributes);
		a.W = $.map(this.W, function(a) {
			return a.clone()
		});
		for (var b in this.W) a.W[b] = this.W[b].clone();
		return a
	};
	H.aspect = function() {
		if (this.width && this.height) return this.width / this.height;
		if (this.associated(!0).length) return this.associated(!0)[0].aspect()
	};
	H.size = function(a) {
		return void 0 !== a ? (this.width = a.width, this.height = a.height, this) : new ex(this.width || 1, this.height || 1)
	};
	H.associated = function(a) {
		if (!0 === a) {
			a = [];
			for (var b in this.W) return this.W[b].loaded && a.push(this.W[b]), a
		} else return this.W[a]
	};
	H.associate = function(a, b) {
		this.W || (this.W = {});
		this.W[b] = a
	};
	H.load = function(a) {
		function b() {
			e.reject();
			$(d).triggerHandler(Fo, [d]);
			a && a(d)
		}

		function c() {
			e.resolve();
			$(d).triggerHandler(fr, [d]);
			a && a(d)
		}
		var d = this,
			e = $.Deferred();
		this.url ? this.loaded ? c() : this.invalid ? b() : $(Wg).one(fr, function(a) {
			d.loaded = !0;
			d.width = a.target.width;
			d.height = a.target.height;
			$(this).unbind();
			c()
		}).one(Fo, function() {
			d.invalid = !0;
			$(this).unbind();
			b()
		}).attr(C, d.url) : b();
		return e.promise()
	};
	H.attr = function(a, b) {
		return "undefined" !== typeof b ? (this.attributes[a] = b, this) : this.attributes[a]
	};

	function ex(a, b) {
		this.width = a;
		this.height = b
	}
	H = ex.prototype;
	H.aspect = function() {
		return this.width / this.height
	};
	H.scale = function(a) {
		return new ex(Math.round(a * this.width), Math.round(a * this.height))
	};
	H.toWidth = function(a) {
		return new ex(a, Math.round(a / this.width * this.height))
	};
	H.toHeight = function(a) {
		return new ex(Math.round(a / this.height * this.width), a)
	};
	H.fill = function(a, b, c, d) {
		b = b || a;
		var e = Math.max(a / this.width, b / this.height);
		!1 === c && 1 < e && (e = 1);
		c = new ex(Math.round(e * this.width), Math.round(e * this.height));
		if (void 0 !== d) {
			b = (c.height - b) / c.height;
			a = (c.width - a) / c.width;
			if (b > d) return c.scale(1 - b * c.height / c.height + d);
			if (a > d) return c.scale(1 - a * c.width / c.width + d)
		}
		return c
	};
	H.fit = function(a, b, c) {
		a = Math.min(a / this.width, (b || a) / this.height);
		!1 === c && 1 < a && (a = 1);
		return new ex(Math.round(a * this.width), Math.round(a * this.height))
	};
	var fx = /^\/(\d{4})_(\d{2})_(\d{2})_archive\.html$/,
		gx = /^\/(\d{4})(\/\d{2})?\/?$/,
		hx = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i;

	function ix() {
		var a = O.decode(void 0),
			b = I().settings.pageType,
			c = new jx;
		if (a.path && 0 <= a.path.indexOf(mg)) return c.tags = [decodeURIComponent(a.path.substr(a.path.indexOf(mg) + 14))], c;
		if (fx.test(a.path)) return b = fx.exec(a.path), a = parseInt(b[1], 10), b = parseInt(b[2], 10) - 1, c.sa = new Date(a, b, 1), c.ra = new Date(a, b + 1, 0), c;
		if (gx.test(a.path)) return b = gx.exec(a.path), a = parseInt(b[1], 10), b[2] ? (b = parseInt(b[2].substr(1), 10) - 1, c.sa = new Date(a, b, 1), c.ra = new Date(a, b + 1, 0)) : (c.sa = new Date(a, 0, 1), c.ra = new Date(a, 12, 0)),
			c;
		if (I().settings.filter_permalink && b == wq) return c.Jc = a.path, c;
		if (I().settings.filter_permalink && b == fu) return c.Gc = a.path, c;
		if (a.path && 0 == a.path.indexOf(lg)) return c.sa = a.params[av] ? (new Date).fromISOString(decodeURIComponent(a.params[av])) : void 0, c.ra = a.params[$u] ? (new Date).fromISOString(decodeURIComponent(a.params[$u])) : void 0, a.params.q && (c.query = decodeURIComponent(a.params.q).replace(/(\+)+/g, m)), c.sa || c.ra || c.query ? c : void 0
	}

	function kx(a) {
		a = typeof a === D ? O.decode(a) : a;
		if (a.authority)
			if (O.isCrossDomain(a.encode())) {
				a = hx.exec(a.authority);
				var b = hx.exec(O.decode().authority);
				if (b && a && b[1] == a[1]) return !0
			} else return !0;
		else return !0;
		return !1
	}

	function lx(a) {
		var b = O.decode(I().settings.blog_url);
		b.path = lg;
		b.params.q = $.trim(a).replace(/(\s)+/g, ke);
		window.location = b.encode()
	};
	var U = {
		context: function() {
			var a = new M(U.nf());
			return U.scopeGlobals(a)
		},
		translate: function(a) {
			return U.scopeGlobals(new M(a))
		},
		scopeGlobals: function(a) {
			var b = I().cache(sp);
			if (!b) {
				var b = {},
					c = I().settings,
					d = c.headless || !1;
				b.Locale = c.blog_locale;
				b.BloggerBase = V().settings.blogger_base;
				b.PlusBase = V().settings.plus_base;
				if (J && J.l10n)
					for (var e in J.l10n) b[Pq + e] = J.l10n[e];
				c.analytics_id && !d && (b.AnalyticsID = c.analytics_id);
				c.adsense_client_id && !d && (b.Adsense = !0, (b.AdsenseClient = c.adsense_client_id) && (b.AdsenseHost =
					c.adsense_host_id));
				d = !!I().settings.comments_enabled;
				b.Comments = d;
				b.Notes = d;
				b.Gadgets = !!c.enableGadgets;
				var f = h,
					d = $.map(c.views || [], function(a) {
						var b = a.name || h,
							c = b.charAt(0).toUpperCase() + b.slice(1);
						f = a.selected ? c : f || c;
						var d = J.l10n && J.l10n[c] ? J.l10n[c] : c,
							e = a.url;
						e && 0 < e.indexOf(hh) && (e = e.slice(e.indexOf(hh)));
						return {
							Name: b,
							URL: e,
							Label: c,
							LocalizedLabel: d,
							Current: a.selected
						}
					});
				d.sort(function(a, b) {
					return a.Label < b.Label ? -1 : a.Label == b.Label ? 0 : 1
				});
				b.Views = d;
				b.CurrentView = f;
				b[qm + $.browser.type] = !0;
				b[qm +
					$.browser.type + $.browser.versionX] = !0;
				b.Mobile = c.is_mobile || $.support.touch;
				b.Tablet = c.is_tablet;
				$.extend(b, U.Nf());
				for (var d = 0, g = !1, k = 0, l; l = V().resources()[k]; k++) l.total && (d += l.total), g = g || l.filter;
				b.PostCount = d;
				g && (b.SearchQuery = g.query, b.SearchPage = !0, b.SearchResultCount = d, b.NoSearchResults = 0 == d);
				d = O.decode(l && l.url).authority || h;
				b.CustomDomain = -1 == d.indexOf(Ee);
				b.BlogURL = c.blog_url || w;
				b.CanonicalUrl = c.canonical_url;
				I().cache(sp, b)
			}
			for (e in b) a.scope(e, b[e]);
			return a
		},
		Nf: function() {
			var a = {};
			$.extend(a, {
				"font:Text": va,
				"color:Text": Xa,
				"image:Background": void 0,
				"color:Background": zc,
				"color:Header Background": Gc,
				"image:Header": void 0,
				"color:Primary": Xa,
				"color:Menu Text": Cv,
				"font:Menu": va,
				"font:Link": va,
				"color:Link": Ja,
				"color:Link Visited": Ja,
				"color:Link Hover": Ja,
				"font:Blog Title": va,
				"color:Blog Title": eb,
				"font:Blog Description": va,
				"color:Blog Description": eb,
				"font:Post Title": va,
				"color:Post Title": Xa,
				"color:Ribbon": ib,
				"color:Ribbon Hover": Ob,
				"color:Bubble": ib
			}, I().settings.template_styles);
			I().settings.additional_css &&
				(a[Au] = I().settings.additional_css);
			var b = /^(bold|normal|italic|\d+%|\d+px|\s)+/i,
				c;
			for (c in a)
				if (0 == c.indexOf(dp)) a[c] = a[c].replace(b, h);
				else if (c == hq) {
				var d = /.*url\((.*?)\).*/.exec(a[c]);
				d && (a[iq] = a[c] = d[1], a[zu] = a[Bu] = d[0])
			}
			return a
		},
		nf: function() {
			for (var a = {}, b = V().resources().slice().reverse(), c = 0, d; d = b[c]; c++) $.isFunction(d.data) && $.extend(a, d.data());
			a.Posts = V().items();
			return a
		},
		Mf: function(a) {
			var b = {},
				c = V().items(),
				d = $.inArray(a, c),
				e;
			0 <= d && (e = 0 < d ? c[d - 1] : null, c = d < c.length - 1 ? c[d + 1] : null, b.PreviousPost =
				e ? e.url : !1, b.NextPost = c ? c.url : V().hasNext());
			b.SameDayDate = e && e.published && e.published.getDate() == a.published.getDate() && e.published.getMonth() == a.published.getMonth() && e.published.getFullYear() == a.published.getFullYear() ? !0 : !1;
			b.NewDayDate = !b.SameDayDate; - 1 != d && (a = d + 1, b.Odd = 1 == a % 2, b.Even = 0 == a % 2, b.Number = a, b[Wj + a] = !0);
			return b
		}
	};
	(function(a) {
		function b(a) {
			var b = Cu,
				c = a % 10;
			1 != Math.floor(a / 10) % 10 && (1 == c ? b = bu : 2 == c ? b = Hr : 3 == c && (b = Qs));
			return b
		}
		var c = [Lk, pj, Tk, cl, Rk, ei, Bk],
			d = [Ii, bi, ij, oh, jj, Mi, Li, rh, Fk, Ej, Bj, Th],
			e = [{
				test: /^DayOfMonth$/,
				generator: function(a) {
					if (a = a.data(z)) {
						var m = 9 > a.getMonth() ? x + (a.getMonth() + 1) : a.getMonth() + 1;
						m += ".";
						m += 10 > a.getDate() ? x + a.getDate() : a.getDate();
						return m;
					}
				}
			}, {
				test: /^DayOfMonthWithZero$/,
				generator: function(a) {
					if (a = a.data(z)) return 10 > a.getDate() ? x + a.getDate() : a.getDate()
				}
			}, {
				test: /^DayOfWeek$/,
				generator: function(a) {
					if (a = a.data(z)) return c[a.getDay()]
				}
			}, {
				test: /^ShortDayOfWeek$/,
				generator: function(a) {
					if (a =
						a.data(z)) return c[a.getDay()].substr(0, 3)
				}
			}, {
				test: /^DayOfWeekNumber$/,
				generator: function(a) {
					if (a = a.data(z)) return a.getDay() || 7
				}
			}, {
				test: /^DayOfMonthSuffix$/,
				generator: function(a) {
					if (a = a.data(z)) return b(a.getDate())
				}
			}, {
				test: /^DayOfYear$/,
				generator: function(a) {
					if (a = a.data(z)) return Math.ceil((a - new Date(a.getFullYear(), 0, 1) + 1) / 864E5)
				}
			}, {
				test: /^WeekOfYear$/,
				generator: function(a) {
					if (a = a.data(z)) return Math.ceil(Math.ceil((a - new Date(a.getFullYear(), 0, 1) + 1) / 864E5) / 7)
				}
			}, {
				test: /^Month$/,
				generator: function(a) {
					if (a = a.data(z)) return d[a.getMonth()]
				}
			}, {
				test: /^ShortMonth$/,
				generator: function(a) {
					//if (a = a.data(z)) return d[a.getMonth()].substr(0, 3)
					if (a = a.data(z)) return a.getFullYear()
				}
			}, {
				test: /^MonthNumber$/,
				generator: function(a) {
					if (a = a.data(z)) return a.getMonth() + 1
				}
			}, {
				test: /^MonthNumberWithZero$/,
				generator: function(a) {
					if (a = a.data(z)) return 9 > a.getMonth() ? x + (a.getMonth() + 1) : a.getMonth() + 1
				}
			}, {
				test: /^Year$/,
				generator: function(a) {
					if (a = a.data(z)) return a.getFullYear()
				}
			}, {
				test: /^ShortYear$/,
				generator: function(a) {
					if (a = a.data(z)) return a.getFullYear().toString().substr(2)
				}
			}, {
				test: /^AmPm$/,
				generator: function(a) {
					if (a = a.data(z)) return 12 > a.getHours() ? Kl : ks
				}
			}, {
				test: /^CapitalAmPm$/,
				generator: function(a) {
					if (a = a.data(z)) return 12 > a.getHours() ? kh : Kj
				}
			}, {
				test: /^12Hour$/,
				generator: function(a) {
					if (a = a.data(z)) return 12 < a.getHours() ? a.getHours() - 12 : a.getHours() || xg
				}
			}, {
				test: /^24Hour$/,
				generator: function(a) {
					if (a = a.data(z)) return a.getHours()
				}
			}, {
				test: /^12HourWithZero$/,
				generator: function(a) {
					if (a = a.data(z)) return a = 12 < a.getHours() ? a.getHours() - 12 : a.getHours() || xg, 10 > a ? x + a : a
				}
			}, {
				test: /^Minutes$/,
				generator: function(a) {
					if (a = a.data(z)) return a = a.getMinutes(), 10 > a ? x + a : a
				}
			}, {
				test: /^Seconds$/,
				generator: function(a) {
					if (a = a.data(z)) return a = a.getSeconds(), 10 > a ? x + a : a
				}
			}, {
				test: /^Beats$/,
				generator: function(a) {
					if (a = a.data(z)) return a = a.getMilliseconds(), 10 > a ? qg + a : 100 > a ? x + a : a
				}
			}, {
				test: /^Timestamp$/,
				generator: function(a) {
					if (a = a.data(z)) return Math.ceil(a.getTime() / 1E3)
				}
			}, {
				test: /^FormattedTime$/,
				generator: function(a) {
					if (a = a.data(z)) return a.toLocaleTimeString()
				}
			}, {
				test: /^TimeAgo$/,
				generator: function(a) {
					var c =
						a.data(z);
					if (c) {
						a = [c.getDate(), b(c.getDate()), m, d[c.getMonth()]].join(h);
						c.getFullYear() < (new Date).getFullYear() && (a += m + c.getFullYear());
						var c = ((new Date).getTime() - c.getTime()) / 1E3,
							e = Math.floor(c / 86400);
						return isNaN(e) || 0 > e || 31 <= e ? a : 0 == e && (60 > c && Gq || 120 > c && ug || 3600 > c && Math.floor(c / 60) + ia || 7200 > c && tg || 86400 > c && Math.floor(c / 3600) + ha) || 1 == e && fl || 7 > e && e + ea || 14 > e && vg || 31 > e && Math.ceil(e / 7) + la
					}
				}
			}, {
				test: /^ISO8601$/,
				generator: function(a) {
					if (a = a.data(z)) return a.toISOString()
				}
			}],
			f = /^((?:Photo|Portrait)URL)(?:-(\d+)(sq)?)?$/,
			g = /^(Video)(?:-(\d+))?$/,
			k = [{
				test: Zm,
				generator: function(b) {
					var c = b.data(this.name) || this.term;
					if (c) {
						if (!a.color) return c;
						var c = a.color(c),
							d;
						for (d in this.attributes)
							if (d in c && a.isFunction(c[d])) c[d](this.resolveAttr(d, b));
						return a.support.rgba ? 0 == c.a ? Ru : c.rgba() : c.hex()
					}
					return Ru
				}
			}, {
				test: dp,
				generator: function(b) {
					b = b.data(this.name) || this.term;
					b = void 0 !== b ? b : ot;
					a.pe && a.pe(b);
					return b
				}
			}, {
				test: gq,
				generator: function(a) {
					a = a.data(this.name);
					return void 0 !== a ? a : On
				}
			}],
			l = {
				"lang:By PostAuthorName": zh,
				"lang:By PostAuthorName 2": ak,
				"lang:Location GeoLocationName": fj,
				"lang:No results for SearchQuery": xj,
				"lang:No results for SearchQuery2": wj,
				"lang:Show all SearchResultCount": Gk,
				"lang:Posted TimeAgo": bk,
				"lang:Posted TimeAgo by PostAuthorName": Yj,
				"lang:Posted TimeAgo by PostAuthorName 2": Xj,
				"lang:Posted at FormattedTime": Zj
			},
			p = 0,
			q;
		for (; q = e[p]; p++) N().generator(q.test, q.generator);
		N().generator(f, function(a) {
			var b = f.exec(this.name),
				c = a.data(b[1]);
			if (c) {
				var d = b[2] || this.resolveAttr(Ot, a);
				a = b[3] == $t || !!this.resolveAttr(au, a);
				if (d &&
					!isNaN(parseInt(d, 10))) return R.thumbnail(c, parseInt(d, 10), a).replace(fe, Gd)
			}
			return c ? c : On
		});
		N().generator(g, function(b) {
			var c = g.exec(this.name),
				d = b.data(c[1]);
			if (d && (b = c[2] || this.resolveAttr(Ot, b)) && !isNaN(parseInt(b, 10))) var e = parseInt(b, 10),
				f = Math.ceil(e / 16 * 9),
				d = a.tags(d, {
					tag: bq,
					replace: function(a) {
						return a.attr(Fv, e).attr(Cp, f).encode()
					}
				});
			return d
		});
		N().generator(/^Summary$/, function(b) {
			var c = this.resolveAttr(su, b);
			if (!c) {
				if (b.data(Kk)) return b.data(Kk);
				c = b.data(Uj)
			}
			b = this.resolveAttr(Vq, b) ||
				300;
			return c && c.substring ? (c = a.trim(c.substring(0, b)), b = c.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/), (b ? I().escapeHTML(b[0]) : I().escapeHTML(c)).replace(/\n/g, Og)) : c
		});
		N().generator(/^Snippet$/, function(b) {
			var c = this.resolveAttr(su, b);
			if (!c) {
				if (b.data(Ik)) return I().escapeHTML(b.data(Ik));
				c = b.data(Uj)
			}
			var c = I().escapeHTML(c),
				d = this.resolveAttr(Xl, b) || 50,
				e = this.resolveAttr(Il, b) || 300,
				f = this.resolveAttr(Vq, b) || 300,
				g = this.resolveAttr(qu, b) || h,
				k = this.resolveAttr(Am, b) || qu;
			if (c) {
				var l;
				if (g && (b = c.toLowerCase().indexOf(g.toLowerCase()),
						0 <= b)) {
					l = c.substr(0, b);
					var p = c.substr(b, g.length),
						q = c.substr(b + g.length, e);
					l.length > d && (b = l.indexOf(m, l.length - d), l = Be + (0 <= b ? l.substr(b + 1) : l.substr(l.length - d)));
					q.length && (b = q.lastIndexOf(m), q = (0 <= b ? q.substr(0, b) : q.substr(0, e)) + Be);
					l = l + p + q;
					k && (l = l.replace(new RegExp(g, rp), function(a) {
						return $g + k + ua + a + Lg
					}))
				}
				l || (l = a.trim(c.substring(0, f)));
				return l
			}
			return c
		});
		N().generator(Pq, function(a) {
			var b = a.data(this.name);
			return (b = b || l[this.name]) ? b.replace(/{\w+}/g, function(b) {
					return (new ow).init(b).apply(a)
				}) :
				this.term
		});
		for (p = 0; q = k[p]; p++) N().generator(q.test, q.generator)
	})(jQuery);
	var R = {
		getImage: function(a, b) {
			if (a) {
				var c = $.extend({}, R.defaults, b);
				c.N = c.N || Math.min(c.width, c.height);
				for (var d = a, e = a, f = c.yc, g = 0, k; k = R.services[g]; g++)
					if (k.match(a)) {
						c.yc && k.rawUrl ? d = k.rawUrl(a) : k.rewriteUrl && (d = k.rewriteUrl(a, c), k.ha ? f = !0 : e = k.rawUrl ? k.rawUrl(a) : a);
						break
					}!f && R.proxy.enabled() && (d = R.proxy.rewriteUrl(e, c));
				return d
			}
		},
		thumbnail: function(a, b, c) {
			return R.getImage(a, {
				N: b,
				Pb: "undefined" !== typeof c ? c : !0
			})
		},
		full: function(a) {
			return R.getImage(a, {
				yc: !0
			})
		},
		canResize: function(a) {
			if (!a) return !1;
			for (var b = 0, c; c = R.services[b]; b++)
				if (c.match(a) && c.ha) return !0;
			return R.proxy.enabled()
		},
		defaults: {
			Fg: 100,
			Eg: 100,
			N: null,
			yc: !1,
			Pb: !1
		},
		proxy: {
			enabled: Wv(!1),
			ha: !0,
			match: Wv(!0),
			rewriteUrl: function(a, b) {
				return Xp + $.param({
					image: a,
					size: b.N,
					crop: b.Pb
				})
			},
			rawUrl: Vv()
		},
		services: [{
			ha: !0,
			match: function(a) {
				var b = a.match(/(?:bp\.blogspot\.com|ggpht|googleusercontent\.com).*(\/s\d+(?:-[cuh]+)?\/)?/);
				if (0 <= a.indexOf(up)) return !1;
				if (b = (b = b && !a.match(/(\/(?:[sS]\d+-[cuh]?R[cuh]?|S\d+)\/)/)) && a.match(/\.(jpg|jpeg|gif|png|tif|tiff|bmp|tga)/i)) a =
					O.decode(a), a.scheme == Tp && a.query && (b = !!a.params.sz);
				return b
			},
			rewriteUrl: function(a, b) {
				var c = /(\/)(s\d+(?:-[dcuh]+)?)(\/)/,
					d = nt + b.N + (b.Pb ? xe : h),
					e = Cd + d + Ed;
				if (a.match(c)) return a.replace(c, e);
				c = a.lastIndexOf(w);
				return [a.slice(0, c), w, d, a.slice(c)].join(h)
			},
			rawUrl: function(a) {
				return this.rewriteUrl(a, {
					N: 1600
				})
			}
		}, {
			ha: !0,
			match: function(a) {
				return /farm[0-9]+\.static(?:\.)?flickr\.com\/[^\/]+\/[^_]+_[^_\.]+(_[mstzb])?\.jpg/.test(a)
			},
			rewriteUrl: function(a, b) {
				for (var c = [{
						P: rl,
						size: 1024
					}, {
						P: Bl,
						size: 640
					}, {
						P: h,
						size: 500
					}, {
						P: tl,
						size: 240
					}, {
						P: yl,
						size: 100
					}, {
						P: wl,
						size: 75
					}], d = c[0].P, e = 0, f; f = c[e]; e++) f.size >= b.N && (d = f.P);
				return a.replace(/(\/[^\/]+\/[^_]+_[^_\.]+)(_[mstzb])?\.jpg/, Cd) + d + df
			},
			rawUrl: function(a) {
				return a.replace(/_[mstzb]\.jpg$/, sl)
			}
		}, {
			ha: !0,
			match: function(a) {
				return a.match(/maps\.googleapis\./i)
			},
			rewriteUrl: function(a, b) {
				var c = O.decode(a);
				b.N = Math.min(640, b.N);
				var d = (c.params.size || h).split(Iv),
					e = parseInt(c.params.zoom, 10) || 1,
					f = parseInt(d[0], 10) || 512,
					d = parseInt(d[1], 10) || 512,
					g = 180 < f;
				if (b.Pb) d = f =
					b.N;
				else var k = b.N / Math.max(f, d),
					f = Math.floor(f * k),
					d = Math.floor(d * k);
				128 > f && g && (k = 128 / f, f = Math.floor(f * k), d = Math.floor(d * k), e--);
				c.size = f + Iv + d;
				c.zoom = e;
				return c.encode()
			},
			rawUrl: function(a) {
				return this.rewriteUrl(a, {
					N: 640
				})
			}
		}, {
			ha: !1,
			match: function(a) {
				return a.match(/i[0-9]+\.photobucket.com\/albums\/.*\.jpg$/)
			},
			rewriteUrl: function(a) {
				return a.replace(/\/([^\/]+)$/, ng)
			},
			rawUrl: function(a) {
				return a.replace(/\/th_([^\/]+)$/, Cd)
			}
		}, {
			ha: !1,
			match: function(a) {
				return a.match(/i[0-9]+\.tinypic.com\/[^\.]+.jpg$/)
			},
			rewriteUrl: function(a) {
				return a.replace(/\/([^.]+).jpg$/, Qf)
			},
			rawUrl: function(a) {
				return a.replace(/_th\.jpg$/, df)
			}
		}, {
			ha: !1,
			match: function(a) {
				return a.match(/imbx.us\/[^\.]+.(jpg|png)$/)
			},
			rewriteUrl: Vv(),
			rawUrl: Vv()
		}, {
			ha: !1,
			match: function(a) {
				return a.match(/\.ak\.fbcdn\.net\/.*photos.+_[abnqst]\.jpg$/)
			},
			rewriteUrl: function(a, b) {
				for (var c = [{
						P: Cl,
						size: 180
					}, {
						P: nt,
						size: 130
					}, {
						P: ju,
						size: 75
					}], d = /_[abnqst]\.jpg$/, e = 0; e < c.length; e++)
					if (e == c.length - 1 || b.N >= c[e].size) return a.replace(d, ml + c[e].P + df)
			},
			rawUrl: function(a) {
				return a.replace(/_[abnqst]\.jpg$/,
					ul)
			}
		}]
	};

	function Rw(a, b, c) {
		this.name = a;
		this.profileUrl = b;
		this.avatarUrl = c
	};

	function mx(a, b) {
		this.url = a;
		this.id = b
	}
	mx.prototype.compareTo = function(a) {
		return a && this.id && this.id == a.id ? 0 : a && this.published && a.published ? this.published.getTime() - a.published.getTime() : -1
	};
	mx.prototype.attachments = function(a) {
		return (void 0 === a ? this.Ra : $.grep(this.Ra, function(b) {
			return b.type == a
		})) || []
	};
	mx.prototype.attach = function(a, b) {
		this.Ra || (this.Ra = []);
		var c = a instanceof nx ? a : new nx(a, b);
		this.Ra.push(c);
		return c
	};
	mx.prototype.data = function() {
		return $.extend({
			RawValue: this
		}, ox(this), px(this))
	};

	function ox(a) {
		var b = {};
		b.ID = a.id;
		b.Permalink = a.url;
		b.Date = a.published;
		b.Body = a.content();
		b.SourceTitle = a.sourceTitle;
		b.Text = !0;
		var c = a.attachments(hs).length;
		a = a.attachments(rv).length;
		b.Photo = 1 == c;
		b.Photoset = 1 < c;
		b.Video = 0 < a;
		if (I().settings.headless) {
			var d = function(a) {
				var b = O.decode(a.attr(C));
				b.authority = am + b.authority;
				return a.attr(C, b.encode()).encode()
			};
			b.Body = $.tags(b.Body, {
				tag: rv,
				attr: C,
				replace: d
			});
			b.Body = $.tags(b.Body, {
				tag: bq,
				attr: C,
				replace: d
			});
			b.Body = $.tags(b.Body, {
				tag: Do,
				attr: C,
				replace: d
			});
			b.Body = $.tags(b.Body, {
				tag: vt,
				replace: function(a) {
					return a.attr(C) ? d(a) : h
				}
			})
		}
		return b
	}

	function px(a) {
		var b = {};
		b.Photos = $.map(a.attachments(hs), function(b) {
			var d = R.full(b.url);
			return R.canResize(d) ? {
				Caption: b.title || a.title,
				LinkURL: d,
				PhotoURL: b.url,
				"PhotoURL-HighRes": d,
				PhotoWidth: b.width,
				PhotoHeight: b.height
			} : null
		});
		b.Photos && b.Photos.length && $.extend(b, b.Photos[0]);
		b.Videos = $.map(a.attachments(rv), function(a) {
			var b = qx(a.url);
			return {
				Caption: a.title,
				Video: b.embed,
				VideoURL: b.url,
				PhotoURL: b.thumbnail
			}
		});
		b.Videos && b.Videos.length && (b.Video = b.Videos[0].Video, b.VideoURL = b.Videos[0].VideoURL,
			b.PhotoURL = b.PhotoURL || b.Videos[0].PhotoURL);
		b.Attachments = $.map(a.attachments(), function(a) {
			var b = {
				Caption: a.title,
				URL: a.url,
				Content: a.content
			};
			a.type == hs ? (b.Photo = !0, b.PhotoURL = a.url, b[Tj] = R.full(a.url), b.PhotoWidth = a.width, b.PhotoHeight = a.height) : a.type == rv ? (a = qx(a.url), b.Video = a.embed, b.PhotoURL = a.thumbnail) : a.type == Ol && (b.Article = !0);
			return b
		});
		return b
	}

	function qx(a) {
		var b, c, d = /(?:(?:vi?)|(?:\.be)|(?:embed))[=\/]([^\?&]+)/i;
		d.test(a) ? (c = d.exec(a), b = [Ug, c[1], jh].join(h), a = ag + c[1], c = [Uf, c[1], bg].join(h)) : /vimeo/.test(a) && (b = [Tg, a, sa].join(h));
		return {
			embed: b,
			url: a,
			thumbnail: c
		}
	};

	function rx(a, b) {
		this.m = a;
		this.fc = -1;
		this.pageSize = b || 25;
		this.Pa = [];
		this.Qa = [];
		this.jb = !1;
		this.Ib = !0;
		this.Ub = $.throttle(this.Ub);
		this.ce = $.proxy(this.re, this);
		this.Uc = $.proxy(this.qe, this)
	}
	H = rx.prototype;
	H.dispose = function() {
		this.Qa = [];
		this.Pa = [];
		delete this.m;
		delete this.ce;
		delete this.Uc;
		$(this).unbind()
	};
	H.items = function() {
		return this.m.items()
	};
	H.resources = function() {
		return [this.m.resource()]
	};
	H.waiting = F("jb");
	H.hasNext = function(a) {
		void 0 !== a && (this.Ib = a);
		return 0 != this.Ib || -1 == this.fc
	};
	H.reset = function() {
		this.fc = -1
	};
	H.next = function(a) {
		var b = ++this.fc;
		b < this.Pa.length ? a && a(this.Pa[b]) : this.Ib ? (this.Qa.push({
			ia: a,
			index: b
		}), this.jb || this.Wd || this.Ub()) : a && a(null)
	};
	H.Ub = function() {
		var a = this.Ob();
		a && (a.dataType = O.isCrossDomain(a.url) ? Cq : Bq, a.success = this.ce, a.error = this.Uc, this.cc = [(new Date).getTime().toString(36), (65536 * (1 + Math.random()) | 0).toString(36)].join(ne), V().notify(Uo, this.cc), $.ajax(a), this.jb = !0)
	};
	H.re = function(a) {
		V().notify(So, this.cc);
		if (a = this.$b(a)) this.Pa.push(a), $.merge(this.items(), a);
		this.jb = !1;
		sx(this)
	};
	H.qe = function() {
		V().notify(So, this.cc);
		this.jb = !1;
		$(this).trigger(Fo);
		sx(this)
	};

	function sx(a) {
		a.Wd = !0;
		var b = a.Qa;
		a.Qa = [];
		for (var c = 0, d; d = b[c]; c++) d.index < a.Pa.length ? d.ia && d.ia(a.Pa[d.index]) : a.Ib ? a.Qa.push(d) : d.ia && d.ia(null);
		0 < a.Qa.length && a.Ub();
		a.Wd = !1;
		delete a.cc
	}
	H.Ob = Wv(null);
	H.$b = Wv(null);

	function tx(a, b, c, d) {
		this.url = a;
		this.filter = b;
		this.id = c;
		this.baseUrl = d || this.url
	}
	tx.prototype.data = function() {
		var a = {};
		a.Title = this.title;
		a.Subtitle = a.Description = this.subtitle;
		a.BlogID = this.id;
		I().settings.pages && (a.Pages = $.map(I().settings.pages, function(a) {
			return {
				ID: a.page_id,
				URL: a.url,
				Label: a.title
			}
		}));
		var b = this.baseUrl || this.url || h;
		a.RSS = [b, b[b.length - 1] == w ? h : w, Qo].join(h);
		return a
	};

	function ux() {}
	ux.prototype.content = function() {
		return $(Sg + this.body + Kg)
	};

	function nx(a, b) {
		b = b || {};
		this.type = a;
		this.url = b.url;
		this.thumbnail = b.thumbnail;
		this.title = b.title;
		this.content = b.content;
		this.width = b.width;
		this.height = b.height
	};

	function vx(a) {
		this.Be = a;
		this.Ae = []
	}
	vx.prototype.items = F("Ae");
	vx.prototype.resource = F("Be");

	function wx() {}
	wx.prototype.content = E();
	wx.prototype.data = E();
	wx.prototype.attachments = E();
	wx.prototype.attach = E();

	function xx(a, b, c, d) {
		this.base(a, c);
		this.filter = b;
		this.baseUrl = d || this.url
	}
	$.inherit(xx, mx);
	H = xx.prototype;
	H.allowComments = !0;
	H.content = function() {
		!this.Mb && this.body && (this.Mb = $.tags(this.body, {
			tag: bq,
			attr: C,
			attrTest: /\/www.youtube.com\//,
			replace: yx
		}), this.Mb = $.tags(this.Mb, {
			tag: Do,
			replace: yx
		}));
		return this.Mb
	};

	function yx(a) {
		if (a.name == Do) return a.attr(Gv, Wr).encode();
		if (a.name == bq) {
			var b = ax(a.attr(C));
			return b.authority == Hv ? a.attr(C, b.param(Gv, Wr).encode()).encode() : a.full
		}
		return a.full
	}
	H.text = function() {
		this.ee || (this.ee = $.toText(this.body, ku));
		return this.ee
	};
	H.summary = function(a) {
		a = a || 300;
		var b = (this.body || h).indexOf(Mg);
		if (0 <= b) return $.toText(this.body.substr(0, b));
		a = $.trim(this.text().substring(0, a));
		return (b = a.match(/(?:.|\n|\r)*(\.(?=\s|\n|\r)|\.$)/)) ? b[0] : a
	};
	H.attachments = function(a) {
		this.Ra || (this.Ra = zx(this) || []);
		return this.base(a)
	};

	function zx(a) {
		var b = [],
			c = /(youtube\.com)|(youtu\.be)\//im,
			d = /(maps\.google\.)/im,
			e = a.title;
		$.merge(b, $.map($.findImages(a.body), function(a) {
			return new nx(hs, {
				url: a,
				title: e
			})
		}));
		$.merge(b, $.map($.tags(a.body, {
			attr: C,
			attrTest: c
		}), function(a) {
			a = qx(a.attr(C));
			return new nx(rv, {
				url: a.url,
				content: a.embed,
				thumbnail: a.thumbnail,
				title: e
			})
		}));
		$.merge(b, $.map($.tags(a.body, {
			tag: bq,
			attr: C,
			attrTest: function(a) {
				return !c.test(a)
			}
		}), function(a) {
			var b = new nx(Yr, {
				url: a.attr(C),
				content: a.encode()
			});
			if (d.test(a.attr(C))) {
				var c =
					O.decode(a.attr(C));
				if (c) {
					var l = O.decode(Vf),
						p = Math.min(640, parseInt(a.attr(Fv), 10) || 512);
					a = Math.min(640, parseInt(a.attr(Cp), 10) || 512);
					l.params.center = c.params.ll;
					l.params.zoom = c.params.z;
					l.params.maptype = c.params.u && pt || c.params.w && $p || c.params.f && ru || c.params.t && ht || ht;
					l.params.sensor = !1;
					l.params.size = p + Iv + a;
					return [new nx(hs, {
						url: l.encode(),
						title: e
					}), b]
				}
			}
			return b
		}));
		$.merge(b, $.map($.tags(a.body, {
			tag: Do,
			attr: C,
			attrTest: function(a) {
				return !c.test(a)
			}
		}), function(a) {
			return new nx(Yr, {
				url: a.src,
				content: a.encode()
			})
		}));
		return b
	}
	H.data = function() {
		var a = this.base();
		a.Title = this.title;
		a.PlaintextBody = this.text();
		this.body && 0 <= this.body.indexOf(Mg) && (a.Summary = this.summary());
		this.author && (a.PostAuthorName = this.author.name, a.PostAuthorURL = this.author.profileUrl, a.PostAuthorPortraitURL = this.author.image);
		this.geoLocation && (a.GeoLocationName = this.geoLocation.name, a.GeoLocationLatitude = this.geoLocation.latitude, a.GeoLocationLongitude = this.geoLocation.longitude);
		this.tags && (a.Tags = $.map(this.tags, function(a) {
				return {
					Tag: a
				}
			}), a.TagsAsClasses =
			$.asClasses(this.tags));
		this.relatedUrl && (a.RelatedURL = this.relatedUrl);
		$.extend(a, U.Mf(this));
		return a
	};

	function Ax(a, b, c) {
		this.name = a;
		this.latitude = b;
		this.longitude = c
	};

	function Bx(a, b) {
		this.xa = [];
		this.Aa = [];
		this.za = 0;
		Bx.prototype.T.apply(this, arguments)
	}
	H = Bx.prototype;
	H.T = function(a, b) {
		var c = [];
		typeof a === Nr ? (this.pageSize = a, c = Array.prototype.slice.call(arguments, 1)) : c = Array.prototype.slice.call(arguments);
		var d = this,
			e;
		$.each(c, function(a, b) {
			$.each($.isArray(b) ? b : [b], function(a, b) {
				if (void 0 === e || e > b.pageSize) e = b.pageSize;
				d.add(b)
			})
		});
		this.pageSize = this.pageSize || e || 25
	};
	H.add = function(a) {
		this.xa.push({
			index: 0,
			iterator: a
		});
		this.reset();
		return this
	};
	H.dispose = function() {
		delete this.H;
		$.each(this.xa, function(a, b) {
			b.iterator.dispose()
		})
	};
	H.items = function() {
		return this.Aa.slice(0, this.za)
	};
	H.waiting = function() {
		return !!this.H || Cx(this)
	};

	function Cx(a) {
		for (var b = 0, c; c = a.xa[b]; b++)
			if (c.iterator.waiting()) return !0;
		return !1
	}
	H.hasNext = function() {
		return this.Aa.length >= this.za + 1 || Dx(this)
	};

	function Dx(a) {
		for (var b = 0, c; c = a.xa[b]; b++)
			if (c.iterator.hasNext() || c.iterator.items().length > c.index + 1) return !0;
		return !1
	}
	H.reset = function() {
		this.za = 0;
		this.Aa = [];
		$.each(this.xa, function(a, b) {
			b.index = 0;
			b.iterator.reset()
		})
	};
	H.resources = function() {
		for (var a = [], b = 0, c; c = this.xa[b]; b++) $.merge(a, c.iterator.resources());
		return a
	};
	H.next = function(a) {
		this.H = a || this.H || E();
		clearTimeout(this.Ec);
		this.Ec = setTimeout($.proxy(this.dd, this), 0)
	};
	H.dd = function() {
		for (var a = !Cx(this); a;) {
			for (var b = void 0, c = 0, d = 0, e; e = this.xa[d]; d++) {
				var f = e.iterator.items()[e.index];
				if (f)(f = f.published && f.published.getTime && f.published.getTime()) ? c < f && (b = e, c = f) : (b = e, c = Number.MAX_VALUE);
				else if (e.iterator.hasNext()) {
					a = !1;
					break
				}
			}
			a && b ? (this.Aa.push(b.iterator.items()[b.index]), b.index++) : a = !1
		}
		a = Dx(this);
		(this.Aa.length >= this.za + this.pageSize || !a) && this.H ? (a = Math.min(this.za + this.pageSize, this.Aa.length), b = this.Aa.slice(this.za, a), this.za = a, a = b.length ? b : null, b = this.H,
			delete this.H, b && b(a)) : Cx(this) || Ex(this, $.proxy(this.dd, this))
	};

	function Ex(a, b) {
		$.each(a.xa, function(a, d) {
			d.iterator.items().length > d.index + 1 || !d.iterator.hasNext() || setTimeout(function() {
				d.iterator.next(b)
			}, 0)
		})
	};
	var Qw = $.inherit(xx);
	Qw.prototype.data = function() {
		var a = this.base();
		a.Blogger = !0;
		a.PostID = this.id;
		a.BlogID = this.blogId;
		a.Comments = a.Notes = !!I().settings.comments_enabled && !!this.allowComments;
		a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0, a.CommentCountWithLabel = a.CommentCount + ca + (1 != a.CommentCount ? nt : h), a.NoteCountWithLabel = a.CommentCountWithLabel, a.IframeComments = this.mf == sg, a.CommentModerationMode = this.tc);
		if (this.tags) {
			for (var b, c = 0, d; d = V().resources()[c]; c++) d instanceof tx && d.id == this.blogId && (b = d.baseUrl);
			var e = b || h,
				e = e + (e[e.length - 1] == w ? h : w),
				e = e + At;
			a.Tags = $.map(this.tags, function(a) {
				return {
					Tag: I().escapeHTML(a),
					URLSafeTag: encodeURIComponent(a),
					TagURL: e + encodeURIComponent(a)
				}
			})
		}
		return a
	};
	var Fx = $.inherit(Qw);
	Fx.prototype.data = function() {
		var a = this.base();
		a.PostID = null;
		a.PageID = this.id;
		return a
	};

	function jx(a) {
		this.tags = a ? a.tags : void 0;
		this.sa = a ? a.sa : void 0;
		this.ra = a ? a.ra : void 0;
		this.query = a ? a.query : void 0;
		this.Jc = a ? a.Jc : void 0;
		this.Gc = a ? a.Gc : void 0;
		this.Wb = a && a.Wb || Ss
	};

	function Gx(a, b, c) {
		this.R = a;
		this.kc = !1;
		this.Ba = 0;
		this.ab = this.pageSize(b) || 1;
		this.lg = c ? c : 0
	}
	H = Gx.prototype;
	H.pageSize = function(a) {
		"undefined" !== typeof a && (this.ab = parseInt(a, 10), this.ab = 0 < this.ab ? this.ab : 1);
		return this.ab
	};
	H.items = function() {
		return this.R.items().slice(0, this.Ba)
	};
	H.resources = function() {
		return this.R.resources()
	};
	H.dispose = function() {
		this.H = null;
		this.R.dispose()
	};
	H.waiting = function() {
		return this.R.waiting() || !!this.H
	};
	H.hasNext = function() {
		return this.R.items().length >= this.Ba + 1 || this.R.hasNext()
	};
	H.reset = function() {
		this.R.reset();
		this.Ba = 0;
		this.kc = !1
	};
	H.prefetch = function() {
		this.R.next(E())
	};
	H.next = function(a) {
		this.H = a || this.H;
		clearTimeout(this.Ec);
		this.Ec = setTimeout($.proxy(this.Ve, this), Math.max(0, this.lg))
	};
	H.Ve = function() {
		if (this.R.items().length >= this.Ba + 1) {
			var a = Math.min(this.Ba + this.ab, this.R.items().length),
				b = this.R.items().slice(this.Ba, a);
			this.Ba = a;
			a = this.H;
			this.H = null;
			a && a(b)
		} else this.R.waiting() || (this.kc ? (b = this.H, this.H = null, b && b(null)) : this.R.next($.proxy(this.Tf, this)))
	};
	H.Tf = function(a) {
		null == a && (this.kc = !0);
		this.next(null)
	};

	function Hx(a, b, c) {
		this.m = a || new vx;
		$.merge(this.m.items(), c || []);
		this.pageSize = b || 25;
		this.ib = 0;
		this.Db = !1
	}
	H = Hx.prototype;
	H.dispose = E();
	H.items = function() {
		return this.m.items().slice(0, this.ib)
	};
	H.resources = function() {
		return this.m.resource() ? [this.m.resource()] : []
	};
	H.waiting = F("Db");
	H.hasNext = function() {
		return this.m.items().length > this.ib
	};
	H.reset = function() {
		this.ib = 0
	};
	H.next = function(a) {
		this.Db = !0;
		if (this.hasNext()) {
			var b = this.ib,
				c = Math.min(b + this.pageSize, this.m.items().length),
				b = this.m.items().slice(b, c);
			Ix(this, a, b);
			this.ib = c
		} else Ix(this, a, null)
	};

	function Ix(a, b, c) {
		b ? setTimeout(function() {
			a.Db = !1;
			b(c)
		}, 0) : a.Db = !1
	};

	function Jx() {
		this.Dg = {
			classic: Qi,
			flipcard: Ui,
			magazine: Ri,
			mosaic: Vi,
			sidebar: Si,
			snapshot: Wi,
			timeslide: Ti
		};
		this.Bf = {
			banner: uk,
			button: kk,
			halfbanner: qk,
			largerectangle: tk,
			leaderboard: vk,
			mediumrectangle: sk,
			skyscraper: mk,
			smallsquare: pk,
			smallrectangle: ok,
			square: rk,
			verticalbanner: lk,
			wideskyscraper: nk,
			largeskyscraper: wk
		}
	}
	Jx.prototype.init = function(a, b, c) {
		this.i = a;
		this.A = c;
		if (this.i.settings.headless) return this;
		var d = this;
		$(this.i).bind(bv, function() {
			var a = $(Ce);
			a.adsense && a.adsense({
				beforeRender: $.proxy(d.$e, d)
			})
		});
		return this
	};
	Jx.prototype.dispose = function() {
		$(this.i).unbind(Ce);
		delete this.i;
		delete this.A
	};
	Jx.prototype.$e = function(a) {
		var b = this.A && this.A.settings && this.Dg[this.A.settings.name],
			c = this.Bf[a.format];
		(b = b && c ? b + ke + c : b || c) && (a.hostchannel = b);
		this.i && this.i.settings && this.i.settings.analytics_id && (a.analytics_id = this.i.settings.analytics_id)
	};

	function Kx() {}
	Kx.prototype.init = function(a, b) {
		this.i = a;
		this.j = b;
		if (this.i.settings.headless) return this;
		var c = {
				loadMore: a.localize(cj),
				loading: a.localize(dj),
				loaded: a.localize(vj),
				addComment: a.localize(lh),
				reply: a.localize(gk),
				replies: a.localize(fk),
				"delete": a.localize(Uh)
			},
			d = {
				bloggerBase: this.j.settings.blogger_base,
				maxDepth: this.i.settings.comments_mtd,
				messages: c
			};
		$(this.i).bind(cv, function() {
			$(De).filter(function() {
				return void 0 === $(this).closest(He).data(cn)
			}).each(function() {
				var a = b.find($(this).attr(Gn)),
					c =
					$(this).closest(He);
				a && c.length && (a = new J.modules.Comments(a, c, d), $(c).data(cn, a))
			});
			$(vf).filter(function() {
				return void 0 === $(this).closest(He).data(cn)
			}).each(function() {
				var a = b.find($(this).attr(Gn)),
					c = $(this).closest(He);
				a && c.length && (a = new J.modules.PlusComments(a, c, d), $(c).data(cn, a))
			})
		});
		$(this.i).bind(cv, function() {
			$(uf).filter(function() {
				return void 0 === $(this).data(fp)
			}).each(function() {
				var a = b.find($(this).attr(Gn));
				$(this).data(fp, !0);
				new J.modules.PlusCommentCount(this, a)
			})
		});
		return this
	};
	Kx.prototype.dispose = function() {
		$(this.i).unbind(He);
		delete this.i;
		delete this.j
	};

	function Lx() {
		this.Ha = []
	}
	H = Lx.prototype;
	H.init = function(a) {
		this.i = a;
		if (this.i.settings.headless) return this;
		$(this.i).bind(Oq, $.proxy(this.Cd, this));
		1 == (new Date).getMonth() && 14 == (new Date).getDate() && setTimeout($.proxy(this.Cd, this), 103E3);
		$(this.i).bind(ln, $.proxy(this.rf, this));
		this.i.shortcut(Bo, function() {
			$(Kf).text(Co)
		});
		return this
	};
	H.dispose = function() {
		$(window).unbind(Ne);
		$(this.i).unbind(Ne);
		delete this.i
	};
	H.Cd = function() {
		$(window).bind(yr, $.proxy(this.Qf, this));
		$(window).bind(Km, $.proxy(this.Kd, this));
		$(this.i).bind(Et, $.proxy(this.Kd, this));
		$(this.i).bind(Em, $.proxy(this.Lf, this))
	};
	H.Qf = function(a) {
		this.Ga = {
			x: a.pageX,
			y: a.pageY
		}
	};
	H.Kd = function(a) {
		a && a.pageX && a.pageY && (this.Ga = {
			x: a.pageX,
			y: a.pageY
		});
		Mx(this, !0)
	};
	H.Lf = function() {
		delete this.Ga;
		Mx(this, !1)
	};
	H.rf = function(a, b) {
		b && (this.Ga = {
			x: b.x || 0,
			y: b.y || 0
		}, Mx(this, !0))
	};

	function Mx(a, b) {
		Nx(a);
		a.Ha = [];
		if (b)
			for (var c = 0; 14 > c; c++) Ox(a, Sn, {
				K: 100 * (Math.random() - .5),
				I: -100 * Math.random() - 250,
				ub: 8 * (Math.random() - .5)
			});
		else Ox(a, Tn, {
			K: -35,
			I: -300,
			ub: -.9,
			rb: 100
		}), Ox(a, Un, {
			K: 35,
			I: -300,
			ub: .9,
			rb: 100
		});
		a.De = setInterval($.proxy(a.Ee, a), 25)
	}

	function Ox(a, b, c) {
		c = c || {};
		a.Ga || (a.Ga = {
			x: $(window).scrollLeft() + $(window).width() / 2,
			y: $(window).scrollTop() + $(window).height() / 2
		});
		var d = new Image;
		b = {
			node: $(d).attr(C, b).addClass(cr).css(oo, Lr)[0],
			x: c.x || a.Ga.x,
			y: c.y || a.Ga.y,
			rb: c.rb || 16,
			size: c.size || 25 * Math.random() + 25,
			K: c.K || 0,
			I: c.I || 0,
			Ya: c.Ya || 2,
			Of: c.Ya || 2,
			Na: c.Na || 0,
			ub: c.ub || 0
		};
		$(b.node).appendTo(A);
		a.Ha.push(b)
	}
	H.Ee = function() {
		this.Ha = $.grep(this.Ha, function(a) {
			if (a.node) {
				a.x += .025 * a.K;
				a.y += .025 * a.I;
				a.Na += .025 * a.ub;
				a.Ya -= .025;
				a.I += 5;
				if (0 > a.Ya) $(a.node).remove(), delete a.node, a = !1;
				else {
					var b = a.Ya / a.Of;
					$(a.node).css({
						display: h,
						height: a.size * (1 - b) + a.rb + Is,
						left: a.x + Is,
						opacity: b,
						position: Dl,
						top: a.y + Is,
						"-webkit-transform": jt + a.Na + Os,
						"-moz-transform": jt + a.Na + Os,
						"-ms-transform": jt + a.Na + Os,
						transform: jt + a.Na + Os,
						width: a.size * (1 - b) + a.rb + Is,
						"z-index": 10001
					});
					a = !0
				}
				return a
			}
			return !1
		});
		0 == this.Ha.length && Nx(this)
	};

	function Nx(a) {
		$.each(a.Ha || [], function(a, c) {
			c.node && $(c.node).remove()
		});
		a.Ha = [];
		clearInterval(a.De)
	};

	function Px() {}
	H = Px.prototype;
	H.init = function(a, b) {
		this.i = a;
		this.j = b;
		this.ec = Qx(this);
		$(this.i).bind(pu, $.proxy(this.Ge, this));
		$(this.i).bind(dv, $.proxy(this.$a, this));
		$(window).bind(Lm, $.proxy(this.da, this));
		$(document).bind(Iq, $.proxy(this.Fe, this));
		Rx(this);
		return this
	};
	H.dispose = function() {
		$(window).unbind(Oe);
		$(document).unbind(Oe);
		$(this.i).unbind(Oe);
		delete this.i;
		delete this.j
	};
	H.da = function(a) {
		$(a.target).parents().andSelf().filter(qc).length || this.Fa && this.Fa.remove()
	};
	H.Fe = function(a) {
		27 == a.which && this.Fa && this.Fa.remove()
	};

	function Rx(a) {
		$.each(a.ec.templates, function(a, c) {
			c.modified && N().template(c.name, c.custom)
		})
	}
	H.Ge = function() {
		this.Fa && this.Fa.remove();
		if (window.TemplateEditor && N().template(Pk)) {
			if (!$(Ap).length) {
				var a = $(N().template(Qk).apply());
				a.attr(aq, mu).addClass(Nt);
				$(zp).append(a)
			}
			this.Fa = $(N().template(Pk).apply(this.ec));
			$(A).append(this.Fa);
			$(wc).scrollLimit({
				keydown: !1
			});
			$(sc).click(this.Pd).first().click();
			$(rc).click($.proxy(this.qg, this));
			$(vc).click($.proxy(this.Wf, this));
			$(uc).click($.proxy(this.eg, this));
			$(qc).addClass(tq);
			setTimeout(function() {
				$(qc).removeClass(tq)
			}, 0)
		}
	};
	H.Wf = function(a) {
		var b = $(a.target).parents().andSelf().filter(Hf);
		b.length && b.attr(Jn) && ($(tc).empty(), this.ya = $.grep(this.ec.templates, function(a) {
			return a.name == b.attr(Jn)
		})[0]) && (this.pb && this.pb.dispose(), this.pb = new window.TemplateEditor($(tc)), this.pb.setValue(this.ya.modified ? this.ya.custom || h : this.ya.source), $(sc).click(this.Pd).last().click(), $(tc).scrollLimit({
			keydown: !1
		}), $(this.pb).bind(xm, $.proxy(this.fg, this)))
	};
	H.eg = function(a) {
		var b = $(a.target).parents().andSelf().filter(Hf);
		if (b.length && b.attr(Jn)) return Sx(this, b.attr(Jn)), a.preventDefault(), !1
	};
	H.fg = function() {
		var a = this.pb.getValue();
		if (this.ya.source != a) {
			var b = this.ya.name,
				c = Tx(this, b);
			c && (c.custom = a, c.modified = !0, $(xc + b + wa).addClass(kn), N().template(c.name, c.custom), a = Ux(this), a[b] = c.custom, (b = Vx()) && window.JSON && b.setItem(Wx(this), window.JSON.stringify(a)))
		} else Sx(this, this.ya.name)
	};
	H.qg = function() {
		this.j.resources().length && this.i.view(this.j.resources()[0].url)
	};
	H.Pd = function() {
		var a = $(this).siblings(pf).index(),
			b = $(this).index();
		$(this).siblings().removeClass(Tr);
		$(this).addClass(Tr);
		$(this).parent().parent().removeClass(cs + a);
		$(this).parent().parent().addClass(cs + b);
		$(this).parent().parent().find(Pe).each(function(a, d) {
			var e = 100 * (a - b);
			$(d).css(Uq, e + Fd)
		})
	};

	function Qx(a) {
		var b = {
				templates: []
			},
			c = N().C;
		a = Ux(a);
		for (var d in c) b.templates.push({
			name: d,
			source: c[d].raw(),
			custom: a[d],
			modified: "undefined" !== typeof a[d]
		});
		b.templates.sort(function(a, b) {
			return a.name > b.name ? 1 : -1
		});
		return b
	}

	function Tx(a, b) {
		return $.grep(a.ec.templates, function(a) {
			return a.name == b
		})[0]
	}

	function Wx(a) {
		return ((a.i.A && a.i.A.settings ? a.i.A.settings.name : h) || h) + ql
	}

	function Ux(a) {
		var b = {},
			c = Vx();
		c && window.JSON && (a = c.getItem(Wx(a))) && (b = window.JSON.parse(a) || {});
		return b
	}

	function Sx(a, b) {
		var c = Tx(a, b);
		if (c) {
			delete c.custom;
			c.modified = !1;
			N().template(c.name, c.source);
			$(xc + b + wa).removeClass(kn);
			c = Ux(a);
			delete c[b];
			var d = Vx();
			d && window.JSON && d.setItem(Wx(a), window.JSON.stringify(c))
		}
	}

	function Vx() {
		try {
			return window.localStorage
		} catch (a) {
			return null
		}
	};

	function Xx() {
		this.Zc = !1;
		this.Fd = 0
	}
	Xx.prototype.init = function(a, b) {
		this.i = a;
		this.j = b;
		$(this.i).bind(ev, $.proxy(this.Ld, this));
		Yx(this);
		return this
	};
	Xx.prototype.dispose = function() {
		$(this.i).unbind(Qe);
		$(Bd).unbind(Qe);
		delete this.i;
		delete this.j
	};

	function Yx(a) {
		if (!a.Zc) {
			var b = $(sq);
			b.length && ($(b).bind(Mq, $.proxy(a.Ld, a)), a.Zc = !0)
		}
	}
	Xx.prototype.Ld = function(a) {
		a.type == Zu ? (Yx(this), $(Bd).val() && this.j.items().length != this.Fd && this.$c()) : (clearTimeout(this.zf), this.zf = setTimeout($.proxy(this.$c, this), 300))
	};
	Xx.prototype.$c = function() {
		var a = $(Bd).val();
		if (a && 0 < a.length) {
			var b = new RegExp(a, eq),
				c = $.grep(this.j.items(), function(a) {
					return b.test(a.title) || a.tags && 0 < $.grep(a.tags, function(a) {
						return b.test(a)
					}).length ? !0 : b.test(a.text())
				});
			this.Fd = this.j.items().length;
			this.i.filter(c, a)
		} else this.i.clearFilter()
	};

	function Zx() {
		this.Dd = this.ad = this.bd = !1;
		this.Ma = null
	}
	H = Zx.prototype;
	H.init = function(a, b) {
		this.i = a;
		!this.i.settings.enableGadgets || this.i.settings.is_mobile || this.i.settings.headless || ($(this.i).bind(fv, $.proxy(this.$a, this)), $(b).bind(jr, $.proxy(this.$f, this)));
		return this
	};
	H.dispose = function() {
		$(this.i).unbind(Ye);
		delete this.i
	};

	function $x() {
		var a = N().template(ki);
		return a ? $.trim(a.apply()) : h
	}
	H.$a = function() {
		this.bd = !0;
		ay(this)
	};
	H.$f = function() {
		this.ad = !0;
		ay(this)
	};

	function ay(a) {
		!a.Dd && a.bd && a.ad && (by(a), $(Np).click($.proxy(a.da, a)), $(window).resize($.proxy(a.cd, a)), setTimeout(function() {
			$(wd).removeClass(np)
		}, 5E3), a.Dd = !0)
	}
	H.da = function(a) {
		var b = $(a.target);
		if (b.closest(We).length) a.stopPropagation();
		else {
			var c = this.Ma;
			if (null != this.Ma) {
				var d = this.Ma,
					e = $(cy(d));
				e && ($(e).removeClass(pp), $(wd).removeClass(op), $(Ve).remove(), (d = this.i.gadgets()[d]) && d.hide());
				this.Ma = null
			}
			b = b.closest(Ue);
			if (b.length) {
				a.stopPropagation();
				a = b.attr(Bn);
				if ((!a || a == c) && (c = this.i.gadgets()[a]) && !c.renderInLightbox) return;
				if ((b = this.i.gadgets()[a]) && b.invoke()) {
					if (b.renderInLightbox) b && (c = this.i.gadgets()[a]) && (b = document.createElement(ro), c.render(b),
						this.i.notify(Zq, c.getTitle(), b, $(cy(a))));
					else {
						c = cy(a);
						$(c).addClass(pp);
						$(wd).addClass(op);
						b.show();
						dy(a);
						if (b = $(Te, c)[0]) $(b).append($x()), b = $(Ve)[0].contentWindow, $(b).resize($.proxy(this.cd, this));
						$(c).data(xt) || ($(c).find(Se).scrollLimit(), $(c).data(xt, !0))
					}
					this.Ma = a
				}
			}
		}
	};
	H.cd = function() {
		this.Ma && dy(this.Ma)
	};

	function dy(a) {
		if ((a = $(cy(a))) && a.length) {
			var b = $(Xe, a),
				c = $(Te, a);
			if (b && b.length && c && c.length) {
				var d = mp,
					e = $(window).height(),
					c = b.height() + c.height(),
					b = a.offset().top - $(window).scrollTop() + (a.height() - b.height()) / 2;
				c + 27 > e ? d = lp : b + c + 27 > e && (d = kp);
				a.toggleClass(mp, d == mp).toggleClass(kp, d == kp).toggleClass(lp, d == lp)
			}
		}
	}

	function ey(a) {
		var b = N().template(ii);
		return b ? $.trim(b.apply(new M({
			id: a
		}))) : h
	}

	function fy(a, b) {
		b.showInGadgetDock && $(wd).append(ey(a))
	}

	function cy(a) {
		return $(hl + a + wa)[0]
	}

	function gy(a) {
		var b = N().template(ji);
		if (b) {
			var c = J.l10n && J.l10n[a.getTitle()] ? J.l10n[a.getTitle()] : a.getTitle();
			return $.trim(b.apply(new M({
				title: c,
				icon: a.getIconUrl(),
				"icon-selected": a.getIconSelectedUrl()
			})))
		}
		return h
	}

	function hy(a, b) {
		var c = cy(a);
		$(c).append(gy(b));
		b.render($(Te, c)[0])
	}

	function iy(a, b, c) {
		c && c.enabled && (fy(b, c), c.isReady ? hy(b, c) : $(c).bind(Rs, $.proxy(function(a, b) {
			b.enabled ? hy(a, b) : $(cy(a)).remove()
		}, a, b, c)))
	}

	function by(a) {
		$(wd).empty();
		for (var b = 0, c; c = a.i.gadgets()[b]; b++) iy(a, b, c)
	};

	function jy() {
		this.Ia = null;
		this.hd = /^([^\/?#]+)\.blogspot\.[^\/?#]+$/i
	}
	H = jy.prototype;
	H.init = function(a, b) {
		this.i = a;
		this.j = b;
		$(this.i).bind(Ft, $.proxy(this.Je, this));
		$(this.i).bind(Fm, $.proxy(this.Ie, this));
		var c = $.proxy(this.bg, this);
		$(window).bind(ms, c).bind(yp, c);
		return this
	};
	H.dispose = function() {
		$(this.i).unbind(Ze);
		$(window).unbind(Ze);
		delete this.i;
		delete this.j
	};
	H.Je = function(a, b) {
		if (b && b.url && (this.Ia && (clearTimeout(this.Ia), this.Ia = null), this.Ia = setTimeout($.proxy(this.le, this, b.url), 1E3), b.title)) {
			for (var c = b.title, d = O.authority(b.url), e = 0, f; f = this.j.resources()[e]; e++)
				if (d == O.authority(f.url)) {
					c += f.title ? ma + f.title : h;
					break
				}
			document.title = c
		}
	};
	H.Ie = function() {
		this.le();
		this.j.resources().length && this.j.resources()[0].title && (document.title = this.j.resources()[0].title)
	};

	function ky(a) {
		return a.j.resources().length && a.j.resources()[0].url ? a.j.resources()[0].url : (a = O.decode()) ? (a.path = h, a.encode(!1, !1)) : document.URL
	}
	H.le = function(a) {
		var b = O.decode().authority;
		a = O.decode(a || ky(this));
		a.path = a.path || w;
		a.scheme = a.scheme || O.decode().scheme;
		a.authority = a.authority || b;
		a.params = $.extend(O.decode().params, a.params);
		var c = this.hd.exec(b),
			d = this.hd.exec(a.authority);
		c && d && c[1] == d[1] && (a.authority = b);
		this.Sb = !0;
		this.Sb = O.rewritePath(a);
		window.location.hash || (this.Sb = !1)
	};
	H.bg = function() {
		this.Ia && (clearTimeout(this.Ia), this.Ia = null);
		if (this.Sb) this.Sb = !1;
		else {
			var a = O.decodePath(),
				b = O.decode(ky(this));
			a.path = a.path || w;
			b.path = b.path || w;
			a.scheme = a.scheme || O.decode().scheme;
			b.scheme = b.scheme || a.scheme;
			b = b instanceof Q ? b : new Q(b);
			a.encode(!1, !1) == b.encode(!1, !1) ? this.i.clearSelection() : this.i.select(a.encode(!1, !1))
		}
	};

	function ly() {
		this.zb = !1
	}
	H = ly.prototype;
	H.init = function(a, b) {
		this.i = a;
		this.j = b;
		$(this.i).bind(ar, $.proxy(this.Le, this));
		$(this.i).bind(Gt, $.proxy(this.sc, this));
		$(window).bind(Mm, $.proxy(this.da, this));
		return this
	};
	H.dispose = function() {
		$(A).removeClass($q);
		$(document).unbind(ef);
		$(window).unbind(ef);
		$(this.i).unbind(ef);
		delete this.i;
		delete this.j
	};
	H.Ke = function(a) {
		a = $(a.target).parents().andSelf().filter(hf);
		if (a.length) {
			var b = a.find(ff);
			a.toggleClass(cu, 0 == b.scrollTop())
		}
	};
	H.da = function(a) {
		this.zb && ($(a.target).parents().andSelf().filter(af).length || this.sc())
	};
	H.Le = function(a, b, c, d) {
		a = $(yd);
		a.length && (this.zb = !1, clearTimeout(this.vb), $(yd).remove(), a = []);
		a = $($.trim(N().template(bj).apply(U.translate({
			title: b
		})))).prependTo(A);
		var e = a.find(hf);
		e.find(gf).append(c);
		if ((b = d ? $(d) : null) && b.length) {
			var f = {
				top: e.css(Ju),
				right: e.css(gt),
				bottom: e.css(om),
				left: e.css(Uq)
			};
			c = b.offset();
			d = $(window).scrollLeft();
			var g = $(window).scrollTop();
			c && (b = {
				top: c.top - g,
				right: $(window).width() - (c.left - d) - b.outerWidth(),
				bottom: $(window).height() - (c.top - g) - b.outerHeight(),
				left: c.left -
					d
			}, e.addClass(tq).css(b), setTimeout(function() {
				e.removeClass(tq).css(f)
			}, 0))
		}
		this.zb = !0;
		a.addClass(Xr);
		e.addClass(jn).addClass(cu);
		e.find(ff).focus().bind(wt, $.proxy(this.Ke, this));
		e.find(Fe).bind(Jm, my(this.sc));
		e.find(ff).scrollLimit();
		$(A).addClass($q);
		this.i.updated()
	};

	function my(a) {
		return function(b) {
			b.stopPropagation();
			b.preventDefault();
			a()
		}
	}
	H.sc = function() {
		$(yd).addClass(Sm);
		$(A).removeClass($q);
		clearTimeout(this.vb);
		this.zb = !1;
		this.vb = setTimeout(function() {
			$(yd).remove()
		}, 1E3)
	};

	function ny() {
		this.ed = !1
	}
	ny.prototype.init = function(a) {
		this.i = a;
		$(a).bind(gv, $.proxy(this.$a, this));
		return this
	};
	ny.prototype.dispose = function() {
		$(this.i).unbind(kf);
		delete this.i
	};
	ny.prototype.$a = function() {
		this.ed || ($(Gg).appendTo(zp), this.i.settings.headless && $(A).addClass(Bp), this.ed = !0)
	};

	function oy() {
		this.yd = {};
		this.T()
	}
	var py = (new Date).getTime();
	oy.prototype.T = function() {
		var a = window.performance && window.performance.timing;
		a && a.responseStart && a.navigationStart && (this.Tc = a.responseStart);
		this.Tc = this.Tc || py || (new Date).getTime()
	};
	oy.prototype.tick = function(a, b) {
		this.yd[a] = (new Date).getTime() - (b && this.yd[b] || 0) - this.Tc
	};

	function qy() {
		this.he = {};
		this.ke = {};
		this.yb = [];
		this.Ab = [];
		this.hb = /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/;
		this.Dc = !1
	}
	var ry = document.URL;
	H = qy.prototype;
	H.init = function(a, b, c) {
		this.i = a;
		this.j = b;
		this.A = c;
		if (this.i.settings.headless) return this;
		a = this.A && this.A.settings && this.A.settings.name;
		this.xf = [$l, a ? cm + a.replace(/\s+/g, ml) : h].join();
		window._gaq && this.i.settings.analytics_id && window._gaq.push([xl, this.i.settings.analytics_id]);
		$(this.i).bind(xv, $.proxy(this.gg, this));
		$(this.i).bind(Ht, $.proxy(this.Ne, this));
		$(this.i).one(Gm, $.proxy(this.Me, this));
		$(this.j).bind(Vo, {
			start: !0
		}, $.proxy(this.Od, this));
		$(this.j).bind(To, {
			end: !0
		}, $.proxy(this.Od, this));
		this.A && ($(this.A).one(mq, $.proxy(this.Yf, this)), $(this.A).bind(hr, $.proxy(this.ag, this)), $(this.A).bind(Zs, $.proxy(this.cg, this)));
		a = $.proxy(this.Zd, this);
		$(window).bind(Yl, a);
		setInterval(a, 15E3);
		return this
	};
	H.dispose = function() {
		this.Zd();
		$(this.i).unbind(lf);
		$(this.j).unbind(lf);
		$(this.A).unbind(lf);
		delete this.i;
		delete this.j;
		delete this.A
	};
	H.Od = function(a, b) {
		var c = sy(this);
		if (b != (c && c.url))
			if (a.data && a.data.start) {
				c = this.hb.test(b) ? yq : Ml;
				if (c == Ml) {
					if (this.bb) return;
					this.bb = b
				}
				ty(this, b, c, vl)
			} else(c = ty(this, b)) && c.tick(bu), this.hb.test(b) && c && c.tick(vl)
	};

	function sy(a) {
		for (var b = 0, c; c = a.j.resources()[b]; b++)
			if (c instanceof tx) return c
	}
	H.Yf = function() {
		var a = sy(this);
		a && a.filter || ty(this, b, km);
		var b = O.decode();
		this.hb.test(b.path) || (delete b.params.base_url, uy(this, b.encode()))
	};
	H.Me = function() {
		var a = sy(this),
			b = a && a.url;
		b && !a.filter && uy(this, b)
	};
	H.cg = function() {
		var a;
		this.Dc ? (a = this.bb, delete this.bb) : (a = (a = sy(this)) && a.url, this.Dc = !0);
		var b = ty(this, a);
		b && (b.tick(Cs, vl), vy(this, a, $(A)))
	};
	H.ag = function() {
		!this.bb && this.Dc && (this.bb = ss, ty(this, this.bb, Ml, vl))
	};
	H.Ne = function(a, b) {
		var c = wy(this, b);
		ty(this, c) || ty(this, c, yq, vl)
	};
	H.gg = function(a, b, c) {
		a = wy(this, b);
		b && b.url && uy(this, b.url);
		(b = ty(this, a)) || (b = ty(this, a, yq, vl));
		b && (b.tick(Cs), c = c ? $(c) : $(A), vy(this, a, c))
	};

	function ty(a, b, c, d) {
		var e = $.grep(a.yb, function(a) {
			return a.identifier == b
		});
		if (e && e.length) return e[0] && e[0].timer;
		if (void 0 !== c) {
			if (a.hb.test(b)) {
				if (a.he[b]) return;
				a.he[b] = !0
			}
			e = new(window.jstiming && window.jstiming.Timer || oy);
			e.name = c;
			void 0 !== d && e.tick(d);
			a.yb.push({
				identifier: b,
				timer: e
			});
			return e
		}
	}

	function xy(a, b) {
		var c = $.grep(a.yb, function(a) {
			return a.identifier == b
		});
		c.length && (a.Ab.push(c[0]), a.yb = $.grep(a.yb, function(a) {
			return a.identifier == b
		}, !0))
	}

	function vy(a, b, c) {
		c && ty(a, b) && c.fullyLoaded(function() {
			var c = ty(a, b);
			c && (c.tick(Ds, vl), xy(a, b))
		})
	}

	function wy(a, b) {
		var c = a.hb.exec(typeof b == D ? b : b && b.url);
		return c ? c[1] || c[2] : b
	}
	H.Zd = function() {
		if (this.Ab.length) {
			var a = $.map(this.Ab, function(a) {
				return a.timer
			});
			this.Ab = [];
			var b = sy(this);
			yy(a, this.xf, {
				blogId: b ? b.id : h
			})
		}
	};

	function uy(a, b) {
		var c = O.decode(b).normalize().encode();
		!b || a.ke[c] || O.isCrossDomain(c) || (a.ke[c] = !0, O.decode(b).path != O.decode(ry).path && (c = window.location.href.split(w)[0], c != Up || b.toLowerCase().startsWith(c) || (b = b.replace(b.split(w)[0], c)), setTimeout(function() {
			$.ajax({
				type: fi,
				async: !0,
				url: O.decode(b).param(Ao, 1).param(lv, 0).encode()
			})
		}, 1E3)), window._gaq && b && window._gaq.push([zl, O.decode(b).path]))
	};

	function zy() {
		this.O = [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()];
		this.ka = [73, 13, 73, 13, 59, 5, 59, 5, 42, 4, 42, 4, 27, 9, 17, 17, 10, 27, 6, 38, 6, 49, 8, 60, 14, 71, 25, 82, 45, 88, 73, 83, 78, 67, 63, 62, 63, 62, 105, 75, 117, 83, 137, 80, 146, 65, 145, 49, 137, 37, 123, 32, 108, 36, 101, 46, 97, 56, 100, 65, 105, 75, 117, 83, 180, 81, 202, 78, 214, 59, 208, 41, 194, 32, 178, 34, 169, 43, 166, 55, 169, 69, 180, 81, 202, 78,
			214, 59, 256, 69, 268, 52, 265, 36, 246, 34, 233, 46, 235, 62, 256, 69, 266, 88, 273, 99, 267, 114, 248, 120, 233, 116, 226, 108, 226, 100, 232, 93, 244, 88, 256, 81, 294, 59, 294, 41, 294, 23, 294, 6, 294, 23, 294, 41, 294, 59, 300, 78, 336, 52, 353, 42, 343, 32, 327, 35, 319, 46, 318, 58, 321, 70, 331, 80, 348, 83, 348, 83
		];
		this.Qb = !1;
		this.xb = 1;
		this.ge = !1
	}
	var Ay = document.URL;
	H = zy.prototype;
	H.init = function(a) {
		this.i = a;
		a.shortcut(Pr, $.proxy(this.tb, this));
		a.shortcut(Yo, $.proxy(this.qb, this));
		a.shortcut(vm, $.proxy(this.pc, this));
		a.shortcut(mn, $.proxy(this.je, this));
		O.decode(Ay).fragment == Qr && this.pc();
		O.decode(Ay).fragment == nn && this.je();
		return this
	};
	H.dispose = function() {
		$(t).U(ko);
		delete this.ui
	};
	H.pc = function() {
		if (!this.ja) {
			var a = this;
			this.Jb ? (clearInterval(this.Jb), delete this.Jb) : this.Jb = setInterval(function() {.5 > Math.random() ? a.tb() : a.qb()
			}, 1E3)
		}
	};
	H.je = function() {
		var a = $(t);
		this.ja ? (delete this.ja, delete this.ba, By(), a.length && a.U(um) && $.each(a.U(um).extensions(), function(a, c) {
			c.active = !0
		})) : (this.i.shortcut(tr, $.proxy(this.af, this)), this.i.shortcut(ym, $.proxy(this.tf, this)), this.i.shortcut(to, $.proxy(this.Ag, this)), a.length && a.U(um).list().length || (.5 > Math.random() ? this.tb() : this.qb(), a = $(t)), a.length && a.U(um) && $.each(a.U(um).extensions(), function(a, c) {
			c.active = !1
		}), Cy(this), this.ja = !0, this.ba = Lo, this.X = this.S = 0, this.Ua = this.Va = this.M = !1)
	};
	H.Ag = function() {
		this.M ? this.Ua = !0 : this.Va = !0
	};
	H.tf = function() {
		if (this.ja) {
			this.ba != on && (this.Y || (this.Y = 0, this.Sa = -.015), this.Z || (this.Z = 1E3 * Math.random()), this.S || (this.X = this.S = 0, this.Ua = this.Va = this.M = !1));
			for (var a = $(t), b = 0; b < a.U(um).list().length; b++) {
				var c = a.U(um).list()[b];
				c && (c.attr(pn, !0), c.attr(Or, b), c.Oa(0, 0), c.attr(ov, 0), c.attr(pv, 0))
			}
			this.ba = on
		}
	};
	H.af = function() {
		if (this.ja)
			for (var a = 0; 10 > a; a++).5 > Math.random() ? this.tb() : this.qb()
	};

	function By() {
		for (var a = $(t).U(um), b = 0; b < a.list().length; b++) {
			var c = a.list()[b];
			c.D = c.attr(rs);
			c.a = c.attr(ps);
			c.qa = c.attr(qs);
			c.vf = !0;
			c.attr(pn, !1);
			c.attr(Pl, !1);
			c.attr(Dq, .5);
			c.attr(Qq, 0);
			c.attr(Ct, 1E4)
		}
	}

	function Cy(a) {
		a.Jb && a.pc();
		a = $(t).U(um);
		for (var b = 0; b < a.list().length; b++) {
			var c = a.list()[b];
			c.attr(Pl, !1);
			c.attr(rs, c.D);
			c.attr(ps, c.a);
			c.attr(qs, c.qa);
			c.Xb(0, 0, 0 < c.attr(mo) ? 0 : Math.PI, .09);
			c.Oa(0, 0)
		}
	}
	H.tb = function() {
		Dy(this, Qn, 1, Zp)
	};
	H.qb = function() {
		for (var a, b, c = 0, d; d = V().resources()[c]; c++)
			if (d instanceof tx) {
				b = d;
				break
			}
		b && (a = Wp + $.param({
			contact_type: lr,
			blog_ID: b.id,
			blog_URL: O.decode(b.url).normalize().encode()
		}));
		Dy(this, Pn, -1, a)
	};

	function Dy(a, b, c, d) {
		var e = $(t);
		e.length || (e = $(Qg).css({
			position: Xo,
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			overflow: Ep,
			"pointer-events": Lr,
			"z-index": 99999
		}).prependTo(A), e.U({
			update: $.proxy(a.ef, a),
			collision: $.proxy(a.ff, a),
			start: function() {
				$(t).show()
			},
			stop: function() {
				$(t).hide()
			}
		}), $(window).bind(Dr, function(b) {
			a.Kb = {
				x: b.clientX,
				y: b.clientY
			};
			clearTimeout(a.hf);
			a.hf = setTimeout(function() {
				delete a.Kb
			}, 2E3)
		}), Ey(a));
		var f = e.height() - 100,
			f = Math.floor(Math.random() * f) + 50;
		b = $(Wg).attr(C, b);
		d && (b = $(Ng).attr(Kp,
			d).wrapInner(b));
		b.css(ls, Sl);
		d = 0 < c ? -53 : e.width();
		a.ja && (d = Math.random() * (e.width() - 53), f = -21);
		e = e.U(Fl, b, {
			w: 53,
			h: 21,
			x: d,
			y: f
		});
		e.attr(mo, c);
		e.Oa(0 < c ? 100 : -100, 0);
		a.ja && (e.attr(rs, e.D), e.attr(ps, e.a), e.attr(qs, e.qa), e.Xb(0, 0, 0 < e.attr(mo) ? 0 : Math.PI, .09), e.Oa(0, 0), e.attr(Pl, a.ba != Lo), c = $(t).U(um), e.attr(pn, !1), e.attr(Or, c.list().length - 1), e.attr(Dq, .5), e.attr(Eq, !1), e.vf = !0, a.ba == on && (a.ba = Dp))
	}

	function Ey(a) {
		a.ge || (window.DeviceOrientationEvent ? window.addEventListener(lo, function(b) {
			Fy(a, b.gamma, b.beta)
		}, !1) : window.OrientationEvent && window.addEventListener(rj, function(b) {
			Fy(a, 90 * b.x, -90 * b.y)
		}, !1), a.ge = !0)
	}

	function Fy(a, b, c) {
		7 < Math.abs(b) || 7 < Math.abs(c) ? a.lb = {
			ga: b / 90,
			speed: c / 90
		} : a.lb && delete a.lb
	}
	H.ef = function(a) {
		if (this.ja)
			if (this.ba == Lo) {
				var b = $(t);
				100 > a.list().length && .2 > Math.random() && (.5 > Math.random() ? this.qb() : this.tb());
				for (var b = b.height() - 50, c = 0, d = 0; d < a.list().length; d++) {
					var e = a.list()[d];
					e && (e.attr(Pl) || e.attr(Pl, Gy(e, b)), e.attr(Pl) && (c += 1, e.attr(pn, !1), e.attr(Or, d), e.attr(Dq, .5), e.attr(pv, 0)))
				}
				100 <= c && (this.ba = Dp, this.Y = 0, this.Sa = -.015, this.X = this.S = 0, this.Ua = this.Va = this.M = !1)
			} else if (this.ba == Dp) {
			for (var b = $(t), c = b.height() - 50, f = e = d = 0, g = 0; g < a.list().length; g++) {
				var k = a.list()[g];
				k && (k.attr(pn) ? f += 1 : k.attr(Pl) ? e += 1 : d += 1)
			}
			if (f >= a.list().length) this.ba = on;
			else
				for (g = 0; g < a.list().length; g++)(k = a.list()[g]) && !k.attr(pn) && (f = Gy(k, c), 0 > k.D.y ? k.G < b.height() / 2 && (k.attr(Fq, !0), k.attr(Eq) && (k.attr(Pl, !0), k.attr(pn, !0), k.Oa(0, 0), k.attr(ov, 0), k.attr(pv, 0))) : k.attr(Fq, !1), f && (k.attr(Pl, !0), d < a.list().length / 2 && Math.random() < 1 / e && (k.attr(Pl, !1), k.attr(Eq, .7 > Math.random()), k.attr(Fq) || (f = k.attr(Dq) * (1.2 + Math.random()), k.attr(Dq, f)), k.Oa(k.D.x, -k.attr(Dq)))));
			this.Z || (this.Z = 1E3 * Math.random());
			Hy(this, a)
		} else this.ba == on && Hy(this, a);
		else Iy(this, a)
	};

	function Gy(a, b) {
		a.attr(Qq) || (a.attr(Qq, 0), a.attr(Ct, 1E4));
		var c = Math.abs(b - a.G) / 50,
			d = !1;.02 > c && 10 > Math.abs(a.attr(Qq) - a.attr(Ct)) && (c = 0, d = !0);
		var e = 0 < a.D.y;
		a.D.y += Math.min(.1, Math.abs(.1 * c));
		e != 0 < a.D.y && (a.attr(Ct, a.attr(Qq)), a.attr(Qq, a.G));
		a.G > b && (a.D.y *= -1, a.G = Math.min(b, a.G));
		a.D.y *= .95;
		d && (a.D.y = 0);
		return d
	}

	function Jy(a, b, c, d, e, f, g, k, l, p, q, n, v) {
		var u = b.list()[c];
		u && (u.attr(eo, d), u.attr(ho, e), c = 2 * (c + 2) - 2, u = c + 1, c < b.list().length && (Jy(a, b, c, d + g * k * Math.cos(f + p), e + g * k * Math.sin(f + p), f + p, g * n, k, l, p, q, n, v), u < b.list().length && Jy(a, b, u, d + -g * l * Math.cos(f - q), e + -g * l * Math.sin(f - q), f - q, -g * v, k, l, p, q, n, v)))
	}

	function Hy(a, b) {
		var c = $(t);
		c.height();
		var d = Math.min(c.width() / 20, c.height() / 20),
			e = c.width() / 2 - 26.5,
			f = c.height() / 2 - 10.5,
			g = a.Z + .1 + .018 * Math.cos((.2 + .1 * a.O[0]) * a.Z),
			k = !1;
		if (1E4 < g) {
			for (var g = 1 + 10 * Math.random(), l = 0; 14 > l; l++) a.O[l] = Math.random();
			k = !0
		}
		var p = 3.3 + (.008923 + 3E-4 * a.O[5]) * g,
			q = .2 + (.006887 + 3E-4 * a.O[6]) * g,
			n = 0 + .057 * Math.cos(1.5 + (5E-4 + 1E-4 * a.O[1]) * g) * g,
			v = 0 + .081 * Math.sin(.5 + (.0011 + 1E-4 * a.O[2]) * g) * g,
			u = Math.min(e, f) * (.1 + .8 * Math.cos(1.7 + (.0033 + 3E-4 * a.O[3]) * g)),
			K = (Math.min(e, f) - u) * (.6 + .5 * Math.sin(3.2 +
				(.00451 + 3E-4 * a.O[4]) * g)),
			u = .8 * u,
			P = .35 * Math.cos(g * (.01 + .05 * a.O[8])),
			G = .35 * Math.sin(g * (.015 + .06 * a.O[9])),
			S = g * (.037 + .07 * a.O[10]),
			da = g * (.036 + .08 * a.O[11]),
			Ha = .65 + .2 * Math.sin(g * (.0175 + .045 * a.O[12])),
			T = .65 + .2 * Math.cos(g * (.0165 + .035 * a.O[13])),
			W = 1,
			y = 1;
		c.width() > c.height() ? W = c.width() / c.height() : y = c.height() / c.width();
		var Y = .4 + .3 * Math.sin(.005 * g);.002 > Math.random() && (a.Qb = !a.Qb);
		if (.002 > Math.random())
			for (l = 0; l < b.list().length / 2; l++) {
				var na = b.list()[l],
					ub = b.list()[b.list().length - 1 - l];
				if (na && ub) {
					var r = na.attr(Or);
					na.attr(Or, ub.attr(Or));
					ub.attr(Or, r)
				}
			}
		l = a.Va || a.Ua;
		(!a.M && .0015 > Math.random() || l) && !a.nb && (a.Sa *= -1, a.nb = !0, na = Math.floor(2 * Math.random()), l ? .999 < a.Y ? 2 == a.S ? (a.X = na, a.Ua = !1, a.M = !1) : (a.X = 2, a.Va = !1, a.M = !0) : 2 == a.X ? (a.S = na, a.Ua = !1, a.M = !1) : (a.S = 2, a.Va = !1, a.M = !0) : .999 < a.Y ? a.X = 1 - a.S : a.S = 1 - a.X);
		a.nb && (0 > a.Sa && .001 > a.Y ? a.nb = !1 : 0 < a.Sa && .999 < a.Y && (a.nb = !1), a.nb || (.999 < a.Y ? a.X = a.S : a.S = a.X));
		a.Y += a.Sa;
		a.Y = Math.max(0, Math.min(1, a.Y));
		na = a.Y;
		ub = 1 - na;
		for (l = 0; l < b.list().length; l++)
			if (r = b.list()[l]) {
				if (r.attr(pn)) {
					var oa =
						Math.cos(p),
						oa = oa + oa * Math.abs(oa),
						oa = oa / 2,
						pa = Math.sin(q),
						pa = pa + pa * Math.abs(pa),
						pa = pa / 2,
						Xc = r.attr(Or);
					a.Qb && 0 == l % 2 && (Xc += 1);
					oa = n + 1.7 * Math.PI * oa * Xc;
					pa = v + .051 * pa * Xc;
					r.attr(go, e + (W * Math.cos(oa) * u + Math.cos(pa) * K));
					r.attr(jo, f + (y * Math.sin(oa) * u + Math.sin(pa) * K))
				}
				a.Qb && 0 == l % 2 && (r.attr(go, e - (r.attr(go) - e) - 53), r.attr(jo, f - (r.attr(jo) - f) - 21))
			}
		Jy(a, b, 0, P * Math.cos(S), P * Math.sin(S), S, 1, P, G, S, da, Ha, T);
		Jy(a, b, 1, -G * Math.cos(-da), -G * Math.sin(-da), -da, -1, P, G, S, da, Ha, T);
		e = 1E7;
		v = -1E7;
		f = 1E7;
		n = -1E7;
		for (l = 0; l < b.list().length; l++)
			if (r =
				b.list()[l]) e = Math.min(e, r.attr(eo)), v = Math.max(v, r.attr(eo)), f = Math.min(f, r.attr(ho)), n = Math.max(n, r.attr(ho));
		p = .1 * c.width() - e;
		q = .1 * c.height() - f;
		v = .8 * c.width() / (v - e);
		n = .8 * c.height() / (n - f);
		for (l = 0; l < b.list().length; l++)(r = b.list()[l]) && r.attr(pn) && (r.attr(eo, p + (r.attr(eo) - e) * v), r.attr(ho, q + (r.attr(ho) - f) * n));
		e = Math.min(.6 * c.width() / 360, .6 * c.height() / 125);
		f = (c.width() - 360 * e) / 2.2;
		c = (c.height() - 125 * e) / 2;
		p = a.ka.length / b.list().length;
		for (l = 0; l < b.list().length; l++)(r = b.list()[l]) && r.attr(pn) && (n = p * r.attr(Or) +
			2 * a.Z, q = Math.floor(n), n -= q, v = q % (a.ka.length / 2) * 2, q = (q + 1) % (a.ka.length / 2) * 2, 3 > q ? (0 == q && (v = 0), (1 < a.S || 1 < a.X) && r.attr(dq, !0)) : r.attr(dq, !1), r.attr(fo, a.ka[v] + n * (a.ka[q] - a.ka[v])), r.attr(io, a.ka[v + 1] + n * (a.ka[q + 1] - a.ka[v + 1])), r.attr(io, c + e * (r.attr(io) + 15 * Math.sin(a.Z / 4 + r.attr(fo) / 40) * Math.sin(a.Z / 40))), r.attr(fo, f + e * r.attr(fo)));
		e = c = 0;
		q = 1.8 * d;
		p = d / 4;
		for (l = f = 0; l < b.list().length; l++)(r = b.list()[l]) && r.attr(pn) && (f += 1, 1 > a.X ? (n = r.attr(go), u = r.attr(jo)) : 2 > a.X ? (n = r.attr(eo), u = r.attr(ho)) : (n = r.attr(fo), u = r.attr(io)),
			1 > a.S ? (v = r.attr(go), K = r.attr(jo)) : 2 > a.S ? (v = r.attr(eo), K = r.attr(ho)) : (v = r.attr(fo), K = r.attr(io)), r.attr(go, na * v + ub * n), r.attr(jo, na * K + ub * u), r.Xb(r.V + 1E3 * (r.attr(go) - r.V), r.G + 1E3 * (r.attr(jo) - r.G), 0 < r.attr(mo) ? 0 : Math.PI, 2), u = r.attr(go) - r.V, n = r.attr(jo) - r.G, r.attr(ov, r.attr(ov) + 1E-4 * u), r.attr(pv, r.attr(pv) + 1E-4 * n), v = Y, a.M && (v = 1), r.V += r.attr(ov) * (1 - v), r.G += r.attr(pv) * (1 - v), 0 < u ? (u = Math.min(u * v, d), r.V += u, r.attr(dq) && a.M || (c = Math.max(c, u))) : (u = Math.max(u * v, -d), r.V += u, r.attr(dq) && a.M || (c = Math.max(c, -u))), 0 <
			n ? (n = Math.min(n * v, d), r.G += n, r.attr(dq) && a.M || (e = Math.max(e, n))) : (n = Math.max(n * v, -d), r.G += n, r.attr(dq) && a.M || (e = Math.max(e, -n))));
		d = q;
		Y = p;
		a.M && (d *= 3, Y *= 3);
		f > .75 * b.list().length && (c + e > d ? a.xb *= .96 : c + e < Y && (a.xb *= 1.04));
		k ? a.Z = g : (r = (g - a.Z) * a.xb, a.Z = r + a.Z)
	}

	function Iy(a, b) {
		for (var c = 0, d; d = b.list()[c]; c++) {
			var e = d.attr(Kr);
			if (a.lb) {
				var f = .3 * a.lb.ga,
					g = 100 - 200 * a.lb.speed,
					g = Math.max(Math.min(g, 200), 0);
				d.rotate(f);
				d.speed(g)
			}
			a.Kb && d.Xb(a.Kb.x, a.Kb.y, 0 < d.attr(mo) ? 0 : Math.PI, .09);
			if (e && (d.attr(Wm) || d.attr(Ho))) {
				if (d.attr(Ho) && !d.attr(Rq)) {
					d.attr(Rq, !0);
					break
				}
				e.fadeOut(function() {
					$(this).remove()
				});
				b.remove(d)
			}
		}
	}
	H.ff = function(a, b, c) {
		this.ja || (a = b.Da(), c = c.Da(), this.i.notify(ln, {
			x: Math.round((a.x + c.x) / 2),
			y: Math.round((a.y + c.y) / 2)
		}))
	};

	function Ky() {}
	Ky.zc = 1E3;
	H = Ky.prototype;
	H.init = function(a, b) {
		this.i = a;
		this.j = b;
		this.i.settings.headless && delete Ky.zc;
		$(this.i).bind(It, $.proxy(this.Qe, this));
		$(this.i).bind(Hm, $.proxy(this.Oe, this));
		this.Za = $.proxy(this.i.next, this.i);
		this.Mc = $.proxy(this.i.previous, this.i);
		this.qc = $.proxy(this.i.clearSelection, this.i);
		this.tg = $.proxy(this.Pe, this);
		$(window).bind(Nm, $.proxy(this.da, this));
		return this
	};
	H.dispose = function() {
		$(A).removeClass($r);
		$(document).unbind(qf);
		$(window).unbind(qf);
		$(this.i).unbind(qf);
		delete this.i;
		delete this.j
	};
	H.Pe = function(a) {
		a = $(a.target).parents().andSelf().filter(sf);
		if (a.length) {
			var b = a.find(rf);
			a.toggleClass(cu, 0 == b.scrollTop())
		}
	};
	H.da = function(a) {
		this.Bb && ($(a.target).parents().andSelf().filter(bf).length || this.i.clearSelection())
	};
	H.Qe = function(a, b, c) {
		a = $(zd);
		var d = 0 <= $.inArray(b, this.j.items()),
			d = d & !this.i.settings.headless;
		!a.length || !a.hasClass(Sm) && d || (delete this.Bb, clearTimeout(this.vb), $(zd).remove(), a = []);
		if (d) {
			var e = $($.trim(N().template(Jj).apply(U.translate(b)))).not(Eg);
			if (a.length) {
				c = b.compareTo ? b.compareTo(this.Bb) : -1;
				var f = $(Ad);
				if (f.length) {
					if (0 == c) return;
					f.removeClass(jn);
					f.addClass(0 > c ? Uq : gt);
					e.addClass(0 > c ? gt : Uq);
					setTimeout(function() {
						f.remove()
					}, Ky.zc || 0)
				}
				e.appendTo(a);
				setTimeout(function() {
						e.removeClass(gt).removeClass(Uq)
					},
					0)
			} else if (a = $($.trim(N().template(Ij).apply(U.translate(b)))).prependTo(A), a.append(e), c = c ? $(c) : $(cf + b.id + kl)) {
				var g = {
						top: e.css(Ju),
						right: e.css(gt),
						bottom: e.css(om),
						left: e.css(Uq)
					},
					d = c.offset(),
					k = $(window).scrollLeft(),
					l = $(window).scrollTop();
				d && (c = {
					top: d.top - l,
					right: $(window).width() - (d.left - k) - c.outerWidth(),
					bottom: $(window).height() - (d.top - l) - c.outerHeight(),
					left: d.left - k
				}, e.addClass(tq).css(c), setTimeout(function() {
					e.removeClass(tq).css(g)
				}, 0))
			}
			this.Bb = b;
			a.addClass(Xr);
			e.addClass(jn).addClass(cu);
			e.find(rf).focus().bind(wt, this.tg);
			e.find(nf).bind(Jm, Ly(this.Za));
			e.find(xf).bind(Jm, Ly(this.Mc));
			e.find(Fe).bind(Jm, Ly(this.qc));
			e.find(rf).scrollLimit({
				callback: this.ig
			});
			$(A).addClass($r);
			if ((a = O.decode().fragment) && O.isSamePage(b.url, !0)) {
				if (!/^[a-zA-Z][\w:.-]*$/.test(a)) return;
				var p = e.find(il + a + ll + a + kl).first();
				p.length && setTimeout(function() {
					p[0].scrollIntoView()
				}, 1100)
			}
			this.i.notify(tv, b, e);
			this.i.updated()
		}
	};

	function Ly(a) {
		return function(b) {
			b.stopPropagation();
			b.preventDefault();
			a()
		}
	}
	H.Oe = function() {
		$(zd).addClass(Sm);
		$(A).removeClass($r);
		delete this.Bb;
		clearTimeout(this.vb);
		this.vb = setTimeout(function() {
			$(zd).remove()
		}, Ky.zc || 0)
	};
	H.ig = function(a, b) {
		if (a) try {
			var c = (new Date).getTime(),
				d = a.data(Uu) || c,
				e = a.data(fs) || c;
			if (0 > b && 2E3 > c - d) {
				if (1E4 < c - e && !a.data(ct)) {
					var f = $(Pg).css({
						"text-align": wm,
						position: Vs,
						"margin-top": Bg,
						top: a.css(bs)
					}).append($(Vg).attr(C, Rn));
					f.one(Jm, function() {
						a.children(Dg).slideUp(1E3);
						f.animate({
							"margin-top": 0
						}, 200)
					});
					a.closest(rf).append(f);
					a.data(ct, !0)
				}
				a.data(fs, e);
				a.data(Uu, (new Date).getTime())
			} else a.data(fs, null)
		} catch (g) {}
	};
	var My = 0;

	function Ny(a, b) {
		I().settings.sf == Gr && $.Cc(function() {
			var c = document.createElement(Xt);
			c.id = an + b.id + My++;
			var d = b.commentCount;
			$(a).text(h);
			a.appendChild(c);
			a.parentNode.style.display = h;
			a.parentNode.style.position = Dl;
			a.parentNode.style.left = pe;
			var e = $(a).css($o);
			window.gapi.commentcount.render(c.id, {
				count_only: Tu,
				query: b.url,
				onclick: null,
				onready: function() {
					c.style.verticalAlign = yu;
					a.parentNode.style.position = h;
					a.parentNode.style.left = h
				},
				preexisting_count: d,
				view_type: b.ne,
				"font-family": e,
				"font-size": $(a).css(ap),
				color: $.color($(a).css(Ym)).hex()
			})
		})
	};

	function Oy(a, b, c) {
		this.o = a;
		this.oa = $(b);
		this.ua = !1;
		this.settings = $.extend({}, {
			bloggerBase: Yf
		}, this.defaults, c);
		this.init()
	}
	Oy.prototype.defaults = {};
	var Py = document.URL;
	H = Oy.prototype;
	H.init = function() {
		var a = this.oa.find(Mf).length,
			b = this.oa.attr(yn),
			c = b == Tu || b == sv;
		if (!I().settings.headless) {
			var d = O.decode(Py);
			d.path == O.decode(this.o.url).path && (d.param(tp) == mr && this.o.tc == ai && (this.o.ne = Ci), d.fragment == vp && (this.o.xg = !0));
			if (a)
				if (this.oa.find(Mf).click($.proxy(this.Cb, this)), this.oa.find(Lf).addClass(Hu).toggle(!1), !c) this.ta = setTimeout($.proxy(this.Cb, this), 0);
				else {
					if (b == sv) {
						var e = this,
							f = wv + this.o.id;
						$(J.ui()).on(f, function(a, b) {
							b.id == e.o.id && /\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(O.decode().path) &&
								(e.ua || e.Cb(), $(J.ui()).off(f))
						})
					}
				} else this.ta = setTimeout($.proxy(this.load, this), 0);
			return this
		}
	};
	H.Cb = function() {
		this.ua ? this.oa.find(Lf).toggleClass(Hu).slideToggle() : (this.Qc = !0, this.load())
	};
	H.dispose = function() {
		clearTimeout(this.ta);
		this.oa && $(this.oa).unbind(Le);
		delete this.oa;
		delete this.o
	};
	H.items = function() {
		return []
	};
	H.load = function() {
		this.ua || (this.ua = !0, this.render(), this.Qc && this.Cb())
	};
	H.render = function() {
		if (I().settings.sf == Gr) {
			var a = bn + this.o.id,
				b = this.o.url,
				c = O.authority(window.location.href) + O.decode(this.o.url).path,
				d = this.settings.bloggerBase + ig + this.o.blogId,
				e = this.o.ne || this.o.tc,
				f = document.getElementById(a),
				g = $.proxy(function() {
					this.o.xg && f.scrollIntoView();
					window.setTimeout($.proxy(this.Af, this), 1050)
				}, this);
			$.Cc(function() {
				window.setTimeout(function() {
					var f = $(xa + a).closest(Ge).innerWidth();
					window.gapi.comments.render(a, {
						first_party_property: uh,
						href: c,
						query: b,
						legacy_comment_moderation_url: d,
						view_type: e,
						width: f,
						onready: g
					})
				}, 10)
			})
		}
	};
	H.Af = function() {
		if (document.createEventObject) {
			var a = document.createEventObject();
			document.documentElement.fireEvent(Ur, a)
		} else a = document.createEvent(pi), a.initEvent($s, !0, !0), window.dispatchEvent(a)
	};

	function Qy() {}
	Qy.prototype.init = function(a, b) {
		this.i = a;
		this.j = b;
		if (this.i.A.settings.name != kn) return $(A).bind(Pm, $.proxy(this.da, this)), this
	};
	Qy.prototype.dispose = function() {
		$(A).unbind(zf);
		delete this.i;
		delete this.j
	};
	Qy.prototype.da = function(a) {
		var b = $(a.target).closest(Cl);
		if (!a.metaKey && b.length) {
			var c = O.decode(b.attr(Kp));
			if (c && kx(c)) {
				var d = b.attr(Dn);
				if (d && !this.i.settings.filter_permalink) return this.i.select(d, b.get(0)), a.preventDefault(), a.stopPropagation(), !1;
				a = b.attr(Ln);
				b = O.decode();
				a ? (b.param(sv, c.param(sv)), c = b) : (b.param(bm) && 0 < b.param(bm).length && c.param(bm, b.param(bm)), b.param(sv) && c.param(sv, b.param(sv)));
				(c = c.encode()) && window.location.href != c && (window.location.href = c);
				return !1
			}
		}
	};

	function Ry() {
		this.jc = !1;
		this.C = {}
	}
	H = Ry.prototype;
	H.init = function(a, b) {
		this.i = a;
		this.j = b;
		$(this.i).bind(hv, $.proxy(this.kd, this));
		this.kd();
		return this
	};
	H.dispose = function() {
		$(this.i).unbind(yf);
		$(Bd).unbind(yf);
		delete this.i;
		delete this.j
	};
	H.kd = function() {
		this.jc || (this.F = $(sq), this.F.length && (this.F.on(Nq, $.proxy(this.Pf, this)), this.F.on(Zo, $.proxy(this.Xf, this)), this.F.on(lm, $.proxy(this.Vf, this)), this.jc = !0));
		return this.jc
	};
	H.Pf = function(a) {
		if (13 == a.keyCode) Sy(this), a.preventDefault();
		else if (27 == a.keyCode) Ty(this), a.preventDefault();
		else if (38 == a.keyCode || 40 == a.keyCode) {
			if (this.aa) {
				var b = this.aa.find(Wq),
					c = b.index(this.aa.find(Xq)),
					c = 38 == a.keyCode ? 0 > c ? b.length - 1 : Math.max(0, c - 1) : 0 > c ? 0 : Math.min(b.length - 1, c + 1);
				b.removeClass(El).eq(c).addClass(El)
			}
			a.preventDefault()
		} else this.F.val() && this.F.val() != this.de && Ty(this), clearTimeout(this.ug), this.ug = setTimeout($.proxy(this.$d, this), this.C[this.F.val()] ? 0 : 500)
	};
	H.Xf = function() {
		this.$d()
	};
	H.Vf = function() {
		var a = this;
		setTimeout(function() {
			Ty(a)
		}, 300)
	};

	function Sy(a) {
		var b = a.F.val();
		if (b) {
			if (a.aa) {
				var c = a.C[b],
					d = a.aa.find(Xq);
				if (d.length && d.attr(En) && (c = $.grep(c.items(), function(a) {
						return a.id == d.attr(En)
					})[0])) {
					a.i.select(c);
					return
				}
			}
			lx(b)
		}
	}
	H.$d = function() {
		var a = this.F.val();
		if (a && 0 < a.length) {
			var b = this.C[a];
			b || (b = this.j.iterator(this.i.settings.blog_url, new jx({
				query: a,
				Wb: Zl
			}), 7), this.C[a] = b);
			if (b) {
				b.reset();
				this.F.addClass(Bt);
				var c = this;
				b.next(function(b) {
					if (c.F.val() == a) {
						c.de = a;
						var e = c.C[a],
							f = J.templates().template(dk);
						f && (Ty(c), b = new M({
							Posts: b
						}), b.scope(Dk, a), b.scope(Ek, $.valueOrDefault(bt, 0, e.m)), e = $(f.apply(b)), c.aa = e, e.appendTo(A), e.on(Om, $.proxy(c.da, c)), $(window).on(yt, $.proxy(c.Sd, c)), c.Sd());
						c.F.removeClass(Bt)
					}
				})
			}
		} else Ty(this)
	};
	H.Sd = function() {
		if (this.aa) {
			var a = this,
				b = 0,
				c = 0 < $.grep(this.F.parents().andSelf(), function(c) {
					if ($(c).css(ns) == Xo) return b = c != a.F[0] ? parseInt($(c).css(Ju), 10) : b, !0
				}).length ? this.F.position() : this.F.offset(),
				d = this.aa.outerWidth();
			$(window).width();
			c = c.top + this.F.outerHeight() + b;
			d = this.F.offset().left + this.F.outerWidth() - d;
			this.aa.css({
				position: Xo,
				top: c,
				left: d
			})
		}
	};

	function Ty(a) {
		a.F.removeClass(Bt);
		a.aa && (delete a.de, a.aa.remove(), delete a.aa, $(window).off(yf))
	}
	H.da = function(a) {
		this.aa.find(Wq).removeClass(El);
		$(a.target).closest(Wq).addClass(El);
		Sy(this)
	};

	function Uy() {
		this.Jd = !1;
		this.ta = null;
		this.Ta = []
	}
	H = Uy.prototype;
	H.init = function(a) {
		this.i = a;
		if (this.i.settings.headless) return this;
		$(this.i).bind(iv, $.proxy(this.$a, this));
		$(window).bind(zt, $.proxy(this.Te, this));
		return this
	};
	H.dispose = function() {
		$(this.i).unbind(Ef);
		$(window).unbind(Ef);
		delete this.i
	};
	H.$a = function() {
		var a = this;
		this.Ta = [];
		$(Af).each(function() {
			function b() {
				Vy(c);
				a.Ta.splice($.inArray(c, a.Ta), 1);
				a.Rc()
			}
			var c = $(this);
			c.data(Xn) ? (c.one(Br, b), a.Ta.push(c)) : c.data(ao) && (c.children().andSelf().addClass(Yn), setTimeout(b, c.data(ao) || 0))
		});
		this.ae()
	};

	function Vy(a) {
		a.find(Me).andSelf().removeClass(Xn)
	}
	H.Te = function() {
		clearTimeout(this.ta);
		this.ta = setTimeout($.proxy(this.ae, this), 300)
	};
	H.ae = function() {
		Wy(this);
		this.Rc()
	};

	function Wy(a) {
		var b = {
			viewport: Xy()
		};
		a.Ta = $.grep(a.Ta, function(a) {
			return Yy(a, b) ? (Vy(a), !1) : !0
		})
	}

	function Yy(a, b) {
		var c = b && b.viewport || Xy(),
			d = Zy(a),
			e = b && b.buffer || 0;
		e && (d.top -= e, d.right += e, d.bottom += e, d.left -= e);
		return d.top <= c.bottom && d.right >= c.left && d.bottom >= c.top && d.left <= c.right && !a.parents().andSelf().filter(function() {
			return $(this).css(oo) == Lr || $(this).css(Vr) == x
		}).length
	}

	function Xy() {
		var a = $(window);
		return {
			top: a.scrollTop(),
			right: a.scrollLeft() + a.width(),
			bottom: a.scrollTop() + a.height(),
			left: a.scrollLeft()
		}
	}

	function Zy(a) {
		var b = a.offset();
		return {
			top: b.top,
			right: b.left + a.width(),
			bottom: b.top + a.height(),
			left: b.left
		}
	}
	H.Rc = function() {
		$y(this);
		az(this);
		bz(this);
		cz(this);
		if (dz(this)) {
			var a = $.valueOrDefault(qp);
			a && a(void 0, zs)
		}
		ez();
		fz()
	};

	function dz(a) {
		var b = window.gapi;
		return b && b.plus && b.plusone && b.person && b.page && b.community ? !0 : (a.Jd || (a.Jd = !0, $.Cc($.proxy(a.Rc, a))), !1)
	}

	function az(a) {
		var b = $(Re).filter(function() {
			return !$(this).data(oq)
		});
		if (b.length && dz(a)) {
			var c = window.gapi;
			b.each(function() {
				var a = $(this).attributes(!1, !0);
				$(this).data(oq, !0);
				c.follow.render($(this).get(0), a)
			})
		}
	}

	function $y(a) {
		var b = window.gapi,
			c = $(wf).filter(function() {
				return !$(this).data(oq)
			});
		c.length && dz(a) && c.each(function() {
			var a = $(this).attributes(!1, !0);
			$(this).data(oq, !0);
			b.plus.render($(this).get(0), a)
		})
	}

	function bz(a) {
		var b = window.gapi,
			c = $(tf).filter(function() {
				return !$(this).data(oq)
			});
		c.length && (c.each(function() {
			var a = $(this);
			a.attr(Mn) || a.attr(Mn, 300);
			a.attr(Cn) || a.attr(Cn, 131);
			a.attr(Kn) || a.attr(Kn, Yq)
		}), dz(a) && c.each(function() {
			var a = $(this).attributes(!1, !0),
				c = $(this).attr(Am).match(/g-(\w*)/)[1];
			$(this).data(oq, !0);
			c == gs ? b.person.render($(this).get(0), a) : c == cs ? b.page.render($(this).get(0), a) : c == dn ? b.community.render($(this).get(0), a) : b.plus.render($(this).get(0), a)
		}))
	}

	function cz(a) {
		var b = window.gapi,
			c = $(Cf).filter(function() {
				return !$(this).data(oq) && !$(this).hasClass(Xn)
			});
		c.length && (c.each(function() {
			var a = $(this);
			a.attr(Hn) || a.attr(Hn, qr);
			a.attr(xn) || a.attr(xn, rm);
			a.attr(Mn) || a.attr(Mn, 300)
		}), dz(a) && c.each(function() {
			var a = $(this).attributes(!1, !0);
			$(this).data(oq, !0);
			b.plusone.render($(this).get(0), a)
		}))
	}

	function ez() {
		$(Df).filter(function() {
			return !$(this).data(oq) && !$(this).hasClass(Xn)
		}).each(function() {
			$(this).data(oq, !0);
			var a = $(document.createElement(bq)).attr({
				allowtransparency: Tu,
				frameborder: x,
				scrolling: Jr,
				src: [Xf, encodeURIComponent($(this).data(jv)), Pd, $(this).data(hn) || Gp, de, encodeURIComponent($(this).data(su)), ae, $(this).data(Ot) || qr].join(h)
			});
			$(this).append(a)
		})
	}

	function fz() {
		$(Bf).filter(function() {
			return !$(this).data(oq) && !$(this).hasClass(Xn)
		}).each(function() {
			$(this).data(oq, !0);
			var a = $(document.createElement(bq)).attr({
				allowtransparency: Tu,
				frameborder: x,
				scrolling: Jr,
				src: [$f, $.param({
					href: $(this).data(jv),
					send: Mo,
					layout: $(this).data(Sq) || sm,
					action: br,
					show_faces: Mo,
					colorscheme: Yq
				})].join(h)
			});
			$(this).append(a)
		})
	};

	function gz() {
		this.mb = h;
		this.Gd = new Date;
		this.nc = {}
	}
	H = gz.prototype;
	H.init = function(a) {
		this.i = a;
		$(document).bind(Lq, $.proxy(this.Zf, this));
		$(document).bind(Jq, $.proxy(this.Ue, this));
		return this
	};
	H.dispose = function() {
		$(document).unbind(Ff);
		delete this.i
	};

	function hz(a) {
		return $.map(a, function(a) {
			return String.fromCharCode(a).toLowerCase()
		}).join(h)
	}
	H.shortcut = function(a, b) {
		var c = $.isArray(a) ? hz(a) : a;
		null === b ? delete this.nc[c] : this.nc[c] = b
	};
	H.Zf = function(a) {
		return iz(this, a)
	};
	H.Ue = function(a) {
		if (-1 !== $.inArray(a.which, [27, 37, 38, 39, 40])) return iz(this, a)
	};

	function iz(a, b) {
		if (/input|textarea|select|option|button/i.test(b.target.tagName)) return !0;
		var c = a.nc || {},
			d = String.fromCharCode(b.which).toLowerCase(),
			e = new Date;
		a.mb = 1E3 > e - a.Gd ? a.mb + d : d;
		a.Gd = e;
		d = 0;
		for (e = a.mb.length; d < e; d++) {
			var f = a.mb.substr(d);
			if (c[f]) {
				a.mb = h;
				if ($.isFunction(c[f])) c[f]();
				else if (a.i[c[f]]) a.i[c[f]]();
				else a.i.notify(c[f]);
				b.preventDefault();
				return !1
			}
			for (var g in c)
				if (0 == g.indexOf(f)) return
		}
	};

	function jz(a, b, c) {
		this.o = a;
		this.J = $(b);
		this.Yd = void 0;
		this.settings = $.extend({}, {
			bloggerBase: Yf,
			pageSize: 50,
			loadAfter: 2E3,
			maxDepth: 1,
			messages: {}
		}, this.defaults, c);
		this.o.comments = null;
		this.Eb = !1;
		this.pa = J.data().commentIterator(this.o, this.settings.pageSize);
		this.init()
	}
	jz.prototype.defaults = {};
	var kz = document.URL,
		lz = /^comment-form_/,
		mz = /^c\d+$/;
	H = jz.prototype;
	H.init = function() {
		var a = this.o.comments ? 0 : this.settings.loadAfter || 0,
			b = this.J.find(Mf).length,
			c = this.J.attr(yn),
			d = c == Tu || c == sv,
			e = O.decode(kz);
		e.path == O.decode(this.o.url).path && e.fragment && (lz.test(e.fragment) || mz.test(e.fragment)) && (d = !1, this.Eb = !0);
		I().settings.headless && (d = !1);
		b && this.J.find(Mf).click($.proxy(this.Fb, this));
		if (b)
			if (this.J.find(Lf).addClass(Hu).toggle(!1), !d) this.ta = setTimeout($.proxy(this.Fb, this), a);
			else {
				if (c == sv) {
					var f = this,
						g = wv + this.o.id;
					$(J.ui()).on(g, function(a, b) {
						b.id == f.o.id &&
							/\.*(\/\d{4}\/\d{2}\/[^\/]+)$/.test(O.decode().path) && (f.ua || f.Fb(), $(J.ui()).off(g))
					})
				}
			} else this.ta = setTimeout($.proxy(this.load, this), a);
		return this
	};
	H.Fb = function() {
		this.ua ? this.J.find(Lf).toggleClass(Hu).slideToggle() : (this.Qc = !0, this.load())
	};
	H.dispose = function() {
		clearTimeout(this.ta);
		this.J && $(this.J).unbind(Le);
		this.pa.dispose();
		delete this.J;
		delete this.o
	};
	H.items = function() {
		return this.pa.items()
	};
	H.load = function(a) {
		this.ua || (this.o.comments ? this.md(this.o.comments) : this.pa.waiting() && !1 !== a || !this.pa.hasNext() || (nz(this, !0), this.pa.next($.proxy(this.md, this))))
	};
	H.md = function(a) {
		nz(this, !1);
		this.ua = !0;
		this.o.comments = a || [];
		this.render(a);
		this.Qc && this.Fb();
		if (this.Eb && !this.J.closest(of).length) {
			var b = this;
			setTimeout(function() {
				var a = b.Eb ? b.J.find(Ke) : b.J;
				a.length && a[0].scrollIntoView && a[0].scrollIntoView(!0)
			}, this.Eb ? 250 : 0)
		}
		this.o.commentCount <= this.settings.pageSize && this.J.find(jf).hide()
	};

	function nz(a, b) {
		void 0 !== b && a.J.toggleClass(kr, b)
	}
	H.render = function(a) {
		if (a) {
			oz(this);
			var b = this,
				c = this.o.commentCount - b.settings.pageSize,
				d = (window.location.hash || xa).substring(1),
				e, f;
			lz.test(d) ? e = d.substring(14) : mz.test(d) && (f = d.substring(1));
			var d = {
					maxDepth: this.settings.maxDepth
				},
				g = {
					id: this.o.id,
					data: a,
					loadNext: function(a) {
						b.pa.hasNext() ? b.pa.next(function(d) {
							nz(b, !1);
							d ? ($.merge(b.o.comments, d), a(d)) : a(null);
							b.settings.pageSize >= c ? b.J.find(jf).hide() : c -= b.settings.pageSize
						}) : a(null)
					},
					hasMore: function() {
						return b.pa.hasNext()
					},
					getMeta: $.proxy(this.Ef,
						this),
					onReply: $.proxy(this.dg, this),
					initComment: f,
					initReplyThread: e,
					config: d,
					messages: this.settings.messages
				},
				k = $(this.J).find(Ie)[0];
			window.goog && window.goog.comments && window.goog.comments.render ? window.goog.comments.render(k, g) : (window.goog = window.goog || {}, window.goog.comments = window.goog.comments || {}, window.goog.comments.Id = window.goog.comments.Id || [], window.goog.comments.Id.push(function() {
				window.goog.comments.render(k, g)
			}))
		}
	};

	function oz(a) {
		if (!a.bc) {
			var b = a.J.find(Je);
			0 < b.length && !b.attr(C) && b.attr(B) && (a.bc = b[0], a.We = b.attr(B), b.attr(C, b.attr(B)))
		}
	}
	H.dg = function(a, b) {
		this.bc && a !== this.Yd && (document.getElementById(b).insertBefore(this.bc, null), this.bc.src = this.We + (a ? Wd + a : h), this.Yd = a)
	};
	H.Ef = function(a, b) {
		if (vq === a) {
			var c = this.o,
				d = b && b.author ? b.author.profileUrl : null;
			return d == (c && c.author ? c.author.profileUrl : null) && null != d ? Tu : Mo
		}
		return co === a ? this.settings.bloggerBase + eg + this.o.blogId + Xd + b.id : bo === a ? xq + (b.extensions[im] || h) : null
	};

	function pz() {}
	pz.Bd = 1E3;
	H = pz.prototype;
	H.init = function(a, b) {
		this.i = a;
		this.j = b;
		this.i.settings.headless && delete pz.Bd;
		var c = $.proxy(this.Ye, this);
		$(this.i).bind(Jt, c);
		$(this.i).bind(Ro, {
			Kf: !0
		}, c);
		$(this.i).bind(vv, {
			force: !0
		}, c);
		$(this.i).bind(Im, $.proxy(this.Xe, this));
		return this
	};
	H.dispose = function() {
		$(A).removeClass(uv);
		$(this.i).unbind(Nf);
		delete this.i;
		delete this.j
	};
	H.Ye = function(a, b) {
		var c = !(!a.data || !a.data.Kf),
			d = !(!a.data || !a.data.force);
		if (c || !b.compareTo || 0 != b.compareTo(this.od)) {
			var e = 0 == $(Pf).length && !c;
			this.rc();
			if (d || !(0 <= $.inArray(b, this.j.items())) || this.i.settings.headless) {
				var d = c ? U.translate({
						Placeholder: !0
					}) : U.translate(b),
					f = $($.trim(N().template(Zk).apply(d))).not(Eg);
				f.find(Of).scrollLimit();
				f.find(Fe).bind(Jm, $.proxy(this.rc, this));
				$(A).addClass(uv).prepend(f.toggleClass(Ir, e));
				e && setTimeout(function() {
					f.removeClass(Ir)
				}, 1);
				if ((d = O.decode().fragment) &&
					O.isSamePage(b.url, !0)) {
					if (!/^[a-zA-Z][\w:.-]*$/.test(d)) return;
					var g = f.find(il + d + ll + d + kl).first();
					g.length && setTimeout(function() {
						g[0].scrollIntoView()
					}, e ? 1E3 : 1)
				}
				c || (this.i.notify(tv, b, f), this.i.updated(), this.od = b);
				var k = $.proxy(this.i.clearSelection, this.i);
				$(window).bind(Qm, function(a) {
					$(a.target).parents().andSelf().filter(Pf).length || k()
				})
			}
		}
	};
	H.rc = function() {
		$(A).removeClass(uv);
		delete this.od;
		$(Pf).each(function() {
			if (!$(this).hasClass(Sm)) {
				$(this).addClass(Sm);
				var a = this;
				setTimeout(function() {
					$(a).remove()
				}, pz.Bd || 0)
			}
		});
		$(window).unbind(Nf)
	};
	H.Xe = function() {
		this.rc()
	};

	function qz(a) {
		this.enabled = !0;
		this.isReady = !1;
		this.suffix_ = a || sg;
		this.settings_ = {};
		this.renderInLightbox = !1;
		this.showInGadgetDock = !0
	}
	H = qz.prototype;
	H.invoke = F("enabled");
	H.show = function() {
		$(this).triggerHandler(Mt);
		this.onShow()
	};
	H.hide = function() {
		$(this).triggerHandler(Fp);
		this.onHide()
	};
	H.init = function(a) {
		this.ui = a;
		this.ready_()
	};
	H.ready_ = function() {
		this.isReady = !0;
		$(this).trigger(Rs)
	};
	H.extractGadgetSettings_ = function(a) {
		a = a.match(/_WidgetManager\._HandleControllerResult\(.*?,.*?,\{(.*)\}\);/);
		if (!a) return null;
		var b = {};
		return b = eval(he + a[1] + Uv)
	};
	H.render = function(a) {
		this.isReady && this.enabled && ($(this).triggerHandler(Xs, a), $(a).append(this.getContentHtml()), this.ui.updated && this.ui.updated(), $(this).triggerHandler(Ys, a), this.onRenderComplete(a))
	};
	H.template = function(a, b) {
		var c = N().template(a),
			d = b && new M(b);
		return c ? $.trim(c.apply(d)) : h
	};
	H.getTitle = Wv(h);
	H.getIconUrl = Wv(h);
	H.getIconSelectedUrl = Wv(h);
	H.getContentHtml = Wv(h);
	H.onRenderComplete = E();
	H.onShow = E();
	H.onHide = E();
	H.requestData = function(a, b) {
		var c = a.settings.widget_settings[b];
		if (c) this.processSettings(c);
		else if ((c = a.resources()) && 0 < c.length && c[0] && c[0].baseUrl) c = {
			url: c[0].baseUrl,
			data: {
				v: x,
				action: nq,
				widgetId: b,
				responseType: Aq
			},
			dataType: su,
			success: $.proxy(this.onSuccess_, this),
			error: $.proxy(this.onError_, this)
		}, window.__wavt && (c.data.xssi_token = window.__wavt), $.ajax(c);
		else this.onError_()
	};
	H.onSuccess_ = function(a) {
		if (a = this.extractGadgetSettings_(a)) this.processSettings(a);
		else this.onError_()
	};
	H.onError_ = function() {
		this.enabled = !1;
		this.ready_()
	};
	H.processSettings = function(a) {
		this.settings_ = a;
		this.ready_()
	};

	function X(a, b, c) {
		this.data = b || V();
		this.ui = c || I();
		this.settings = $.extend({}, {
			name: sv,
			scrollBuffer: 400,
			pageSize: 25,
			infiniteScroll: !0,
			autoselect: !0
		}, this.defaults, a);
		this.Vc = [];
		this.Nd = !1;
		this.async(this.mg)
	}
	H = X.prototype;
	H.defaults = {};
	H.shortcuts = [{
		chord: "j",
		action: "next"
	}, {
		chord: "k",
		action: "previous"
	}, {
		chord: ":t",
		action: "templates"
	}, {
		chord: [37],
		action: "previous"
	}, {
		chord: [39],
		action: "next"
	}, {
		chord: [27],
		action: "clearSelection"
	}, {
		chord: [38, 38, 40, 40, 37, 39, 37, 39, 98, 97],
		action: Oq
	}];
	H.modules = [];
	H.Vd = !1;
	H.dispose = function() {
		rz(this)
	};
	H.nameEvent = function(a) {
		return this.settings.name ? a + Ae + this.settings.name : a
	};
	H.bind = function(a, b, c, d) {
		b = this.nameEvent(b);
		if (d) $(a).on(b, d, c);
		else $(a).on(b, c)
	};
	H.async = function(a, b) {
		var c = Array.prototype.slice.call(arguments),
			d = c.shift();
		if ($.isFunction(d)) {
			var e = this;
			setTimeout(function() {
				d.apply(e, c)
			}, 0)
		}
	};
	H.template = function(a, b) {
		var c = N().template(a);
		return c ? $.trim(c.apply(this.templateData(b)) || h) : h
	};
	H.templateData = function(a) {
		a = "undefined" !== typeof a ? U.translate(a) : U.context();
		this.scope(a);
		return a
	};
	H.scope = E();
	H.onItemClick = function(a) {
		var b = $(a.target),
			b = b.hasClass(wq) ? b : b.parents($e),
			c = b.attr(Dn);
		if (c && !a.metaKey && !($(a.target).is(Cl) && O.decode($(a.target).attr(Kp)).authority && O.isCrossDomain($(a.target).attr(Kp)) && $(a.target).parents().andSelf().filter(Kf).length)) return a.stopPropagation(), a.preventDefault(), this.ui.select(c, b), !1
	};
	H.preventMore = function(a) {
		"undefined" !== typeof a && (this.Vd = !!a);
		return this.Vd
	};
	H.maybeMore = function(a) {
		this.preventMore() || this.ui.settings.headless || (a || this.settings.infiniteScroll && this.needMore()) && this.async(this.Td)
	};
	H.needMore = function() {
		var a = !1;
		if (!this.data.hasNext()) return !1;
		var b = this.settings.infiniteScroll;
		0 <= $.inArray(b, [qv, Tu, Tr, !0]) ? b = qv : b == Gp ? b = Gp : 0 <= $.inArray(b, [Mo, Sr, !1]) && (b = Sr);
		if (b && b != Sr) {
			if (b == qv) b = $(document).height() - $(window).height() - $(window).scrollTop(), a = this.settings.scrollBuffer >= b;
			else if (b == Gp) b = $(document).width() - $(window).width() - $(window).scrollLeft(), a = this.settings.scrollBuffer >= b;
			else {
				var c = $(b);
				if (c.length) {
					var b = $(window).scrollTop(),
						d = $(window).scrollLeft() + $(window).width(),
						e = $(window).scrollTop() + $(window).height(),
						f = $(window).scrollLeft(),
						g = c.offset();
					if (g) var a = g.top,
						k = g.left + c.width(),
						c = g.top + c.height(),
						g = g.left,
						a = a <= e && k >= f && c >= b && g <= d
				}
			}
			a || (b = this.ui.current()) && $.inArray(b, this.data.items()) == this.data.items().length - 1 && (a = !0)
		}
		return a
	};
	H.mg = function() {
		if (this.modules)
			for (var a = 0, b; b = this.modules[a]; a++) this.ui.settings.modules.push(b);
		this.ui.configure().view(this);
		$(this).triggerHandler(ts);
		this.onPreInit();
		this.async(this.T);
		if (this.shortcuts)
			for (a = 0; b = this.shortcuts[a]; a++) this.ui.shortcut(b.chord, b.action)
	};
	H.T = function() {
		$(A).addClass(this.settings.name);
		$.support.touch ? $(A).addClass(Ku) : $(A).addClass(Mr);
		this.bind(window, wt, $.proxy(this.ve, this));
		this.bind(window, $s, $.proxy(this.ue, this));
		this.settings.autoselect && this.bind(A, Jm, $.proxy(this.onItemClick, this), $e);
		var a = $.proxy(this.te, this);
		this.bind(this.data, ir, function(b, c) {
			a(c)
		});
		this.bind(this.ui, Dt, $.proxy(this.we, this));
		this.bind(this.ui, Dm, $.proxy(this.qc, this));
		this.bind(this.ui, Wo, $.proxy(this.se, this));
		this.bind(this.ui, Cm, $.proxy(this.kf,
			this));
		$(this).triggerHandler(kq);
		this.onInit();
		this.async(this.Hf)
	};
	H.Hf = function() {
		$(this).triggerHandler(lq);
		this.onInitComplete();
		this.async(this.Td)
	};
	H.Td = function() {
		!this.data.waiting() && this.data.hasNext() && !1 !== this.onPreLoad() && ($(this).triggerHandler(us), this.async(this.Jf))
	};
	H.Jf = function() {
		!1 !== this.onLoad() && ($(this).triggerHandler(fr), $(A).addClass(kr), this.data.next(parseInt(this.settings.pageSize, 10) || 1))
	};
	H.te = function(a) {
		$(A).removeClass(kr);
		$(this).triggerHandler(ir, [a]);
		this.onLoadComplete(a);
		this.async(this.ng, a)
	};
	H.ng = function(a) {
		this.ui.settings.headless && /\.*(?:(\/\d{4}\/\d{2}\/[^\/]+)|\/p(\/[^\/]+\.html))$/.test(O.decode().path) || (!1 !== this.onPreRender(a) ? ($(this).triggerHandler(vs, [a]), this.async(this.rg, a)) : (this.async(this.Wc, a), this.ui.updated()))
	};
	H.rg = function(a) {
		$(this).triggerHandler(Xs, [a]);
		this.onRender(a);
		this.async(this.Wc)
	};
	H.Wc = function(a) {
		this.ui.updated();
		$(this).triggerHandler(Ys, [a]);
		this.onRenderComplete(a);
		this.Nd || this.data.hasNext() || (this.Nd = !0, this.async(this.uf));
		this.async(this.maybeMore)
	};
	H.uf = function() {
		$(this).triggerHandler(Vn);
		this.onDataComplete()
	};

	function rz(a) {
		if (!1 !== a.onUnload()) {
			$(a).triggerHandler(Xu);
			if (a.settings && a.settings.name) {
				$(A).removeClass(a.settings.name);
				var b = Ae + a.settings.name;
				$.each(a.Vc, function(a, d) {
					$(d).off(b)
				});
				delete a.Vc
			}
			delete a.ui;
			delete a.data;
			delete a.settings
		}
	}
	H.ue = function(a) {
		this.onResize(a);
		this.maybeMore()
	};
	H.ve = function(a) {
		this.onScroll(a);
		this.maybeMore()
	};
	H.we = function(a, b) {
		if (!this.ui.settings.headless || this.settings.name == kn) this.onSelect(b)
	};
	H.qc = function() {
		this.onClearSelection()
	};
	H.se = function(a, b, c) {
		this.onFilter(b, c)
	};
	H.kf = function() {
		this.onClearFilter()
	};
	H.la = E();
	H.Uf = E();
	H.Vb = E();
	H.Md = E();
	H.onPreInit = X.prototype.la;
	H.onInit = X.prototype.la;
	H.onInitComplete = X.prototype.la;
	H.onPreLoad = X.prototype.la;
	H.onLoad = X.prototype.la;
	H.onLoadComplete = X.prototype.Vb;
	H.onPreRender = X.prototype.Vb;
	H.onRender = X.prototype.Vb;
	H.onRenderComplete = X.prototype.Vb;
	H.onDataComplete = X.prototype.la;
	H.onUnload = X.prototype.la;
	H.onResize = X.prototype.Md;
	H.onScroll = X.prototype.Md;
	H.onSelect = X.prototype.Uf;
	H.onClearSelection = X.prototype.la;
	H.onFilter = E();
	H.onClearFilter = X.prototype.la;

	function sz(a) {
		this.settings = {};
		this.configure(a);
		this.Yc = []
	}
	var tz;

	function V() {
		tz || (tz = new sz);
		return tz
	}
	var uz = [];
	sz.prototype.notify = function(a, b) {
		var c = Array.prototype.slice.call(arguments),
			d = c.shift(),
			e = this;
		setTimeout(function() {
			$(e).triggerHandler(d, c)
		}, 0);
		return this
	};
	sz.prototype.configure = function(a) {
		this.settings = $.extend({}, vz, this.settings, a);
		return this
	};
	var vz = {
		batchSize: 25
	};
	H = sz.prototype;
	H.open = function(a, b, c) {
		var d = a,
			e = b,
			f = c || this.settings.batchSize;
		arguments.length || (d = O.decode().root(), e = ix());
		var g;
		if ($.isArray(d)) {
			var k = this;
			g = new Bx(this.settings.batchSize, $.map(d, function(a) {
				return k.iterator(a, e)
			}))
		} else g = this.iterator(d, e);
		this.L = new Gx(g, f);
		this.Hb = new wz(d);
		return this.L
	};
	H.items = function() {
		return this.L ? this.L.items() : []
	};
	H.resources = function() {
		return this.L ? this.L.resources() : []
	};
	H.waiting = function() {
		return this.L ? this.L.waiting() : !1
	};
	H.hasNext = function() {
		return this.L ? this.L.hasNext() : !1
	};
	H.next = function(a, b) {
		if (this.L) {
			var c, d = 0;
			a && ($.isFunction(a) ? c = a : d = parseInt(a, 10));
			b && ($.isFunction(b) ? c = b : d = parseInt(b, 10));
			!isNaN(d) && 0 < d && this.L instanceof Gx && this.L.pageSize(d);
			this.H = c;
			this.L.next($.proxy(this.Ce, this))
		}
	};
	H.reset = function() {
		this.L && this.L.reset()
	};
	H.Ce = function(a) {
		this.notify(ir, a);
		this.H && (this.H(a), delete this.H)
	};
	H.find = function(a) {
		if (a) {
			var b = /\./.test(a);
			b && (a = O.decode(a).encode(!1, !1));
			var c = function(c) {
				return a == (b ? c.url : c.id)
			};
			if ((c = $.grep(this.items(), c).concat($.grep(this.Yc, c))) && 0 < c.length) return c[0]
		}
	};
	H.iterator = function(a, b, c) {
		for (var d = 0, e; e = uz[d]; d++)
			if (e.owns(a)) return e.iterator(a, b, c);
		if (xz && xz.owns(a)) return xz.iterator(a, b, c)
	};
	H.post = function(a, b) {
		var c;
		if (c = this.Hb) {
			c = this.Hb;
			var d = $.proxy(this.Ad, this, b),
				e;
			e = [c.me, hg].join(h);
			var f = {
				alt: Bq,
				v: 2,
				dynamicviews: 1
			};
			if (/^\d+$/.test(a)) e += w + a;
			else {
				var g = yz(a);
				g != w && (f.path = g)
			}
			O.decode().scheme == Tp && (f.rewriteforssl = !0);
			e = {
				type: fi,
				url: e + hh + $.param(f)
			};
			c = zz(c, a, wq, e, d)
		}
		return !!c
	};
	H.page = function(a, b) {
		var c;
		if (c = this.Hb) {
			c = this.Hb;
			var d = $.proxy(this.Ad, this, b),
				e = Az(c, a);
			if (e) d && d(e), c = !1;
			else {
				var e = [c.me, gg].join(h),
					f = {
						alt: Bq,
						v: 2,
						dynamicviews: 1
					};
				O.decode().scheme == Tp && (f.rewriteforssl = !0);
				/^\d+$/.test(a) && (e += w + a);
				e = {
					type: fi,
					url: e + hh + $.param(f)
				};
				c = zz(c, a, fu, e, d)
			}
		}
		return !!c
	};
	H.Ad = function(a, b) {
		b && this.Yc.push(b);
		a(b)
	};
	H.commentIterator = function(a, b) {
		return new Bz(new vx(a), b || this.settings.batchSize)
	};

	function Cz(a) {
		this.Ka = [];
		this.Ac = [];
		this.C = {};
		this.wg = (new gz).init(this);
		this.configure(a)
	}
	var Dz, Ez = {
		modules: [Jx, Kx, Lx, Px, Xx, Zx, jy, ly, ny, qy, zy, Ry, Qy, Uy],
		showWelcome: !0,
		enableGadgets: !0
	};

	function I() {
		Dz || (Dz = new Cz, Dz.j = V());
		return Dz
	}
	H = Cz.prototype;
	H.dispose = function() {
		this.removeModules();
		$(this).unbind();
		return this
	};

	function Fz(a, b) {
		a.ac ? a.ac.push(b) : (a.ac = [b], a.ie = setInterval($.proxy(a.jf, a), 100))
	}
	H.jf = function() {
		(new Pw).get().ready && (clearInterval(this.ie), $.each(this.ac, function(a, b) {
			b()
		}), delete this.ac, delete this.ie)
	};
	H.configure = function(a) {
		var b = (new Pw(a)).get();
		b.ready || Fz(this, $.proxy(this.configure, this, a));
		this.settings = $.extend({}, Ez, this.settings, b);
		this.j && this.j.configure(this.settings);
		return this
	};
	H.cache = function(a, b) {
		if (void 0 !== b) return this.C = this.C || {}, this.C[a] = b, this;
		if (this.C) return this.C[a]
	};
	H.shortcut = function(a, b) {
		this.wg.shortcut(a, b)
	};
	H.addModule = function(a, b) {
		if (a) {
			for (var c = 0, d; d = this.Ka[c]; c++)
				if (a.constructor === d.constructor)
					if (b) {
						this.removeModule(d);
						break
					} else return this;
			this.Ka.push(a);
			a.init && a.init(this, this.j, this.A)
		}
		return this
	};
	H.removeModules = function() {
		$.each(this.Ka, function(a, b) {
			b && b.dispose && b.dispose()
		});
		this.Ka = []
	};
	H.removeModule = function(a) {
		a && (a.dispose && a.dispose(), this.Ka = $.grep(this.Ka, function(b) {
			return b === a
		}, !0));
		return this
	};

	function Gz(a, b) {
		a.Ac = [];
		for (var c = a.settings.widget_ids || [], c = c.concat(b || []), d = 0, e = c.length; d < e; d++) {
			var f = J.gadgets().create(c[d]);
			if (f) {
				var g = a;
				g.settings.enableGadgets && f && (g.Ac.push(f), f.init && f.init(g, g.j, g.A))
			}
		}
	}
	H.gadgets = F("Ac");
	H.register = function(a, b) {
		!1 === b || a.prototype instanceof X || (a.prototype = $.extend({}, X.prototype, a.prototype));
		this.viewType_ = a;
		return this
	};
	H.localize = function(a, b) {
		var c = J.l10n && J.l10n[a] || a;
		if (c) var d = b instanceof M ? b : new M(b || h),
			c = c.replace(/{\w+}/g, function(a) {
				return (new ow).init(a).apply(d)
			});
		return c
	};
	H.view = function(a, b) {
		if (!(this.settings && this.settings.ready || (new Pw).get().ready)) return Fz(this, $.proxy(this.view, this, a, b)), this;
		var c, d, e = this;
		a && (typeof a === D || $.isArray(a) ? d = a : c = a);
		b && (typeof b === D || $.isArray(a) ? d = b : c = b);
		d = d || this.settings.blog_url || O.decode().root();
		if (!c && d) {
			this.A && this.A.dispose();
			if (!Hz(this)) return;
			this.j.open(d, ix());
			this.j.next(function() {
				e.j.reset();
				e.A = new e.viewType_
			})
		} else c && (this.A = c, this.j = this.A.data, this.Ka.length || $.each(this.settings.modules, function(a, b) {
			e.addModule(new b)
		}));
		this.settings.enableGadgets && Gz(this, 0 == this.gadgets().length ? [Jk] : []);
		this.C = {};
		this.ea = -1;
		delete this.mc;
		return this
	};

	function Hz(a) {
		if (a.settings.error) {
			var b = N().template(Zh);
			b && ($(A).children().not(Gf).remove(), $(A).append(b.apply(U.translate(a.settings.error))))
		} else {
			if ($(xd).length) return a.ui.settings.headless;
			a.settings.showWelcome && (b = N().template(dl)) && ($(A).children().not(Gf).remove(), $(A).append(b.apply(U.context())));
			return !0
		}
	}
	H.current = function() {
		if (0 <= this.ea && this.ea < this.j.items().length) return this.j.items()[this.ea];
		if (this.mc) return this.mc
	};
	H.hasPrevious = function() {
		return 0 < this.j.items().length && 0 < this.ea
	};
	H.hasNext = function() {
		var a = this.j.items().length;
		return 0 < a && (this.ea < a.length - 1 || this.j.hasNext())
	};
	H.next = function() {
		var a = this.Za();
		if (-1 != a) return a < this.j.items().length ? this.select(this.j.items()[this.ea = a]) : this.j.hasNext() && !this.j.waiting() && this.A.maybeMore(!0), this
	};
	H.Za = function() {
		var a = this.cache(ol);
		if (a) {
			var b = $.inArray(this.current(), a);
			return $.inArray(a[Math.min(a.length - 1, b + 1)], this.j.items())
		}
		return this.ea + 1
	};
	H.previous = function() {
		var a = this.Mc();
		0 <= a && a < this.j.items().length && this.select(this.j.items()[this.ea = a]);
		return this
	};
	H.Mc = function() {
		var a = this.cache(ol);
		if (a) {
			var b = $.inArray(this.current(), a);
			return $.inArray(a[Math.max(0, b - 1)], this.j.items())
		}
		return Math.max(0, this.ea - 1)
	};
	H.select = function(a, b) {
		var c = a,
			d = this.settings.pageType;
		if (void 0 === c)
			if (this.settings.preview) c = this.settings.preview;
			else if (d == fu || d == wq) this.settings.permalinked = !0, this.settings.pageId ? c = this.settings.pageId : this.settings.postId && (c = this.settings.postId);
		if (void 0 === c) {
			var e = this.j.resources().length && this.j.resources()[0].url;
			e && !O.isSamePage(e) && (e = O.decode(), e.path != w && (c = e.encode(!1, !1), this.settings.permalinked = !0))
		}
		var f;
		typeof c == Nr || typeof c == D ? f = this.find(c) : c && (f = c);
		if (f) Iz(this, f,
			b);
		else if (c && !1 !== b) {
			b && (f = $(b)) && f.attr(Fn) && (d = f.attr(Fn) == cs ? fu : wq);
			var g = this;
			f = function(a) {
				a && Iz(g, g.find(a.id) || a)
			};
			d == fu ? this.j.page(c, f) : this.j.post(c, f)
		}
		return this
	};

	function Iz(a, b, c) {
		var d = $.inArray(b, a.j.items());
		a.ea = 0 <= d ? d : a.ea;
		a.mc = 0 <= d ? void 0 : b;
		!1 !== c && a.notify(Dt, b, c)
	}
	H.clearSelection = function() {
		this.settings.permalinked = !1;
		return this.notify(Dm)
	};
	H.find = function(a) {
		return this.j.find(a)
	};
	H.filter = function(a, b) {
		a && this.cache(ol, a).notify(Wo, a, b);
		return this
	};
	H.clearFilter = function() {
		return this.cache(ol, null).notify(Cm, this.j.items())
	};
	H.updated = function() {
		return this.notify(Zu, this.j.items())
	};
	H.notify = function(a, b) {
		var c = Array.prototype.slice.call(arguments),
			d = c.shift(),
			e = this;
		setTimeout(function() {
			$(e).triggerHandler(d, c)
		}, 0);
		return this
	};
	H.escapeHTML = function(a) {
		return a && a.replace(/&/g, Nd).replace(/>/g, Qd).replace(/</g, Sd).replace(/'/g, Kd).replace(/`/g, Ld).replace(/"/g, Yd) || h
	};

	function wz(a) {
		this.me = a;
		this.gb = []
	}

	function zz(a, b, c, d, e) {
		if (d) {
			var f = 0 < $.grep(a.gb, function(a) {
				return a.identifier == b
			}).length;
			a.gb.push({
				ia: e,
				identifier: b
			});
			if (f) return !0;
			d.context = {
				self: a,
				identifier: b,
				pageType: c
			};
			d.dataType = O.isCrossDomain(d.url) ? Cq : Bq;
			d.success = a.ye;
			d.error = $.proxy(a.xe, a);
			V().notify(Uo, d.identifier);
			$.ajax(d);
			return !0
		}
		if (e) return e(null), !1
	}
	wz.prototype.list = function(a) {
		if (this.oc) a && a(this.oc);
		else {
			var b = this;
			$.ajax({
				type: fi,
				url: Zf,
				dataType: Cq,
				success: function(c) {
					b.oc = Jz(c);
					a && a(b.oc)
				},
				error: function() {
					a && a(null)
				}
			})
		}
	};
	wz.prototype.ye = function(a) {
		this.self && this.identifier && (V().notify(So, this.identifier), this.self.og.call(this.self, a, this.identifier, this.pageType))
	};
	wz.prototype.xe = function() {
		$(this).trigger(Fo)
	};
	wz.prototype.og = function(a, b, c) {
		var d = null;
		c == fu ? a && a.entry ? d = Kz(a.entry) : (a && a.feed && (this.Qd = (d = Lz(a)) && d.items), d = Az(this, b)) : d = a && a.entry ? Kz(a.entry) : a && a.feed && 1 == a.feed.entry.length ? Lz(a).items[0] : void 0;
		if (d) {
			a = this.gb;
			this.gb = [];
			c = 0;
			for (var e; e = a[c]; c++) e.identifier == b ? e.ia(d) : this.gb.push(e)
		}
	};

	function Az(a, b) {
		if (a.Qd) {
			var c = $.grep(a.Qd, function(a) {
				if (/^\d+$/.test(b)) return a.id == b;
				var c = yz(b);
				a = yz(a.url);
				return c == a
			});
			return c && c[0]
		}
	}

	function yz(a) {
		var b = V().settings.blog_url;
		if (0 == a.indexOf(b)) return a = a.replace(b, h), b[b.length - 1] == w && (a = w + a), a;
		b = O.decode(a).root();
		return a.replace(b, h)
	};

	function Mz() {
		this.T()
	}
	var Nz = {
		blogger_base: "https://www.blogger.com"
	};
	Mz.prototype.owns = function(a) {
		a = new Q(a);
		return a.scheme && a.scheme != Op && a.scheme != Tp ? !1 : !0
	};
	Mz.prototype.iterator = function(a, b, c) {
		Oz();
		c = c || V().settings.batchSize;
		return new Pz(new vx(new tx(a, b)), c)
	};
	Mz.prototype.T = function() {
		Oz();
		N().converter(Qw, this.td);
		N().converter(Fx, this.td)
	};
	Mz.prototype.td = function(a, b) {
		a.Ca || (a.Ca = a.data());
		b.scope(a instanceof Fx ? Qj : Wj, a.Ca);
		return a.Ca
	};

	function Oz() {
		for (var a in Nz) V().settings[a] || (V().settings[a] = Nz[a])
	}
	var xz = new Mz;

	function Bz(a, b) {
		rx.call(this, a, b || 50)
	}
	Bz.prototype = $.extend({}, rx.prototype, Bz.prototype);
	Bz.prototype.Ob = function() {
		var a = V().settings,
			b = [a[ys] || O.decode().scheme == Tp ? a.blogger_base + fg + a.blog_id + w : a.blog_url + Po, this.m.resource().id, dg].join(h),
			c = {
				alt: Bq,
				v: 2,
				dynamicviews: 1,
				orderby: Fs,
				reverse: Mo,
				"max-results": this.pageSize
			};
		3 == a.feeds_api && (c.proxy_feed = !0);
		this.Xc && (c[Hs] = (new Date(this.Xc)).toISOString());
		O.decode().scheme == Tp && (c.rewriteforssl = !0);
		return {
			type: fi,
			url: b + hh + $.param(c)
		}
	};
	Bz.prototype.$b = function(a) {
		if (a && a.feed) {
			var b = {};
			b.results = Qz(a.feed);
			b.comments = [];
			if (a.feed.entry)
				for (var c = 0, d; d = a.feed.entry[c]; c++) b.comments.push(Rz(d));
			a = b
		} else a = void 0;
		if (b = a && a.comments && a.comments.length) this.Xc = parseInt(a.comments[a.comments.length - 1].timestamp) + 1;
		c = this.m.resource() || 0;
		(!b || a.results.startIndex + a.results.pageSize > c) && this.hasNext(!1);
		return a && a.comments
	};

	function Lz(a) {
		if (a && a.feed) {
			var b = {};
			b.Gb = Sz(a.feed);
			b.results = Qz(a.feed);
			b.items = [];
			if (a.feed.entry)
				for (var c = 0, d; d = a.feed.entry[c]; c++)(d = Kz(d)) && d.published && (d.sourceTitle = b.Gb ? b.Gb.title : void 0, b.items.push(d));
			b.items[0] && (b.Gb.published = b.items[0].published);
			return b
		}
	}

	function Jz(a) {
		if (a && a.feed && a.feed.entry) {
			for (var b = [], c = 0, d; d = a.feed.entry[c]; c++) {
				var e = Sz(d);
				$.grep(d.link, function(a) {
					a.rel == Jl && (e.url = a.href)
				});
				b.push(e)
			}
			b.sort(function(a, b) {
				return b.updated - a.updated
			});
			return b
		}
	}

	function Kz(a) {
		if (a) {
			var b = a.tag || Z(a.id),
				c = a && /post-/i.test(b) && new Qw || a && /page-/i.test(b) && new Fx || new xx;
			(b = /blog-(\d+)\.\w{4}-(\d+)/.exec(Z(a.id))) ? (c.blogId = b[1], c.id = b[2]) : c.id = a.id;
			c.title = Z(a.title);
			c.body = a.content ? Z(a.content) : Z(a.summary) + Be;
			c.updated = (new Date).fromISOString(Z(a.updated));
			c.published = (new Date).fromISOString(Z(a.published));
			if (a.replies || a.thr$total) c.commentCount = parseInt(Z(a.replies || a.thr$total), 10);
			c.allowComments = void 0 !== a.thr$total;
			b = Tz(a);
			b.length && (c.author =
				b[0]);
			a.link && ($.isArray(a.link) ? $.grep(a.link, function(a) {
				a.rel == Jl ? c.url = a.href : a.rel == Us && (c.relatedUrl = a.href)
			}) : c.url = a.link, c.url && (b = c.url.split(w), 2 <= b.length && (c.baseUrl = b[0] + Sf + b[2])));
			a.enclosure && $.grep(a.enclosure, function(a) {
				a.type == Us && (c.relatedUrl = a.url)
			});
			a.gf ? c.tags = a.gf.slice(0) : a.category && (c.tags = $.map(a.category, function(a) {
				return a.term
			}));
			c.geoLocation = Uz(a);
			a = Vz(a);
			c.mf = a.commentSource;
			c.tc = a.commentModerationMode;
			return c
		}
	}

	function Rz(a) {
		var b = new ux,
			c = /blog-(\d+).post-(\d+)/.exec(Z(a.id));
		c && (b.id = c[2]);
		b.extensions = Vz(a);
		b.body = Z(a.content);
		b.timestamp = (new Date).fromISOString(Z(a.published)).getTime() + h;
		b.displayTime = b.extensions[hm];
		b.extensions[gm] == Tu && (b.body = ah + b.body + Lg);
		if (c = Tz(a)) b.author = c[0];
		a.link && (a.link[2] && (b.url = b.link = b.permalink = a.link[2].href), a.link[3] && (a = /.*comments\/default\/(\d+)\?.*/.exec(a.link[3].href))) && (b.parentId = a[1]);
		return b
	}

	function Sz(a) {
		var b = {
				title: Z(a.title),
				subtitle: Z(a.subtitle),
				updated: (new Date).fromISOString(Z(a.updated))
			},
			c = /blog-(\d+)/.exec(Z(a.id));
		b.id = c && c[1] || a.id;
		a.author && (b.authors = Tz(a));
		return b
	}

	function Qz(a) {
		return {
			total: parseInt(Z(a.totalResults || a.openSearch$totalResults), 10),
			startIndex: parseInt(Z(a.startIndex || a.openSearch$startIndex), 10),
			pageSize: void 0 === a.openSearch$itemsPerPage ? void 0 : parseInt(Z(a.openSearch$itemsPerPage), 10)
		}
	}

	function Tz(a) {
		var b = [];
		a.author && ($.isArray(a.author) ? b = $.map(a.author, function(a) {
			return new Rw(Z(a.name), Z(a.uri), a.gd$image ? a.gd$image.src : void 0)
		}) : b.push(new Rw(Z(a.author.name), Z(a.author.uri))));
		return b
	}

	function Uz(a) {
		if (a.georss$featurename && a.georss$point) {
			var b = Z(a.georss$point).split(m);
			if (2 == b.length) return new Ax(Z(a.georss$featurename), parseFloat(b[0], 10), parseFloat(b[1], 10))
		}
	}

	function Vz(a) {
		var b = {};
		a = a.gd$extendedProperty || [];
		$.isArray(a) && $.map(a, function(a) {
			b[a.name] = a.value
		});
		return b
	}

	function Z(a) {
		return a && void 0 !== a.$t ? a.$t : a
	};

	function Pz(a, b) {
		rx.call(this, a, b || 25);
		var c = Wz(this);
		this.ic = c && c.ra ? c.ra.getTime() : void 0;
		this.Sc = 1;
		this.xd = (c = Wz(this)) && c.sa ? c.sa.getTime() : void 0;
		this.Nc = a.resource().filter && $.trim(a.resource().filter.query || h);
		this.Kc = a.resource().filter && $.trim(a.resource().filter.Jc || h);
		this.Yb = a.resource().filter && $.trim(a.resource().filter.Gc || h)
	}
	Pz.prototype = $.extend({}, rx.prototype, Pz.prototype);
	Pz.prototype.Ob = function() {
		var a = V().settings,
			b = !!this.Yb,
			c = a[ys] || O.decode().scheme == Tp,
			d = (c ? a.blogger_base : this.m.resource().url) || h;
		d[d.length - 1] !== w && (d += w);
		c = [d, c ? Po + a.blog_id : Oo, b ? jg : kg, Xz(this)].join(h);
		d = {
			alt: Bq,
			v: 2,
			dynamicviews: 1
		};
		b || (d.orderby = Fs, d[pr] = this.pageSize);
		3 == a.feeds_api && (d.proxy_feed = !0);
		this.ic && (d[Gs] = (new Date(this.ic)).toISOString());
		this.xd && (d[Hs] = (new Date(this.xd)).toISOString());
		this.Nc && (d.q = this.Nc.replace(/(\s)+/g, ke), Zl == this.m.resource().filter.Wb && (d.orderby =
			Ws), d[du] = this.Sc);
		this.Kc && (d.path = this.Kc);
		O.decode().scheme == Tp && (d.rewriteforssl = !0);
		return {
			type: fi,
			url: c + hh + $.param(d)
		}
	};

	function Xz(a) {
		a = (a = Wz(a)) && a.tags ? a.tags : [];
		return a.length ? Rf + encodeURIComponent(a[0]).replace(/\'/g, Gd) : h
	}

	function Wz(a) {
		return a.m || a.m.resource() ? a.m.resource().filter : void 0
	}
	Pz.prototype.$b = function(a) {
		a = Lz(a);
		var b = !!this.Yb;
		a && a.items && a.items.length && (b && (a.items = [Yz(this, a)]), (this.m.resource().filter && this.m.resource().filter.Wb || Ss) != Zl && a.items.sort(function(a, b) {
			return b.published.getTime() - a.published.getTime()
		}), this.Nc ? this.Sc += a.results.pageSize : this.ic = a.items[a.items.length - 1].published.getTime() - 1);
		$.extend(this.m.resource(), a.Gb);
		a.results && a.results.total ? this.m.resource().total = a.results.total : this.m.resource().total = $.valueOrDefault(zq, 0, a);
		(!a.items ||
			!a.items.length || a.results.startIndex + a.results.pageSize > a.results.total || this.Kc || this.Yb) && this.hasNext(!1);
		return a && a.items
	};

	function Yz(a, b) {
		for (var c = b.items, d = 0, e = c.length; d < e; d++)
			if ((new Q(c[d].url)).path == a.Yb) return c[d];
		return null
	};

	function Zz(a, b) {
		rx.call(this, a, b || 25)
	}
	Zz.prototype = $.extend({}, rx.prototype, Zz.prototype);
	Zz.prototype.Ob = function() {
		var a = [this.m.resource().url, cg].join(h),
			b = {
				maxResults: this.pageSize,
				key: V().settings.plus_key
			};
		this.gd && (b.pageToken = this.gd);
		return {
			type: fi,
			url: a + hh + $.param(b)
		}
	};
	Zz.prototype.$b = function(a) {
		if (a && a.items) return $.extend(this.m.resource(), {
			id: /people\/(\d+)/.exec(this.m.resource().url)[1],
			title: a.title,
			updated: (new Date).fromISOString(a.updated),
			total: (this.m.resource().total || 0) + a.items.length
		}), this.gd = a.nextPageToken, this.pageSize > a.items.length && this.hasNext(!1), a = $.map(a.items, this.yf), !this.m.resource().published && a[0] && (this.m.resource().published = this.m.resource().published = a[0].published), a
	};
	Zz.prototype.yf = function(a) {
		var b = new Uw;
		b.id = a.id;
		b.title = a.title;
		b.published = a.published && (new Date).fromISOString(a.published);
		b.updated = a.updated && (new Date).fromISOString(a.updated);
		b.url = a.url;
		b.author = a.actor && new Rw(a.actor.displayName, a.actor.url, a.actor.image);
		b.location = a.Hg;
		if (a = a.object) b.body = a.content, b.relatedUrl = a.url, b.commentCount = a.replies && a.replies.totalItems || 0, b.Kg = a.resharers && a.resharers.totalItems || 0, b.Jg = a.plusoners && a.plusoners.totalItems || 0, a.attachments && $.each(a.attachments,
			function(a, d) {
				var e = {
					type: d.objectType,
					url: d.fullImage && d.fullImage.url || d.embed && d.embed.url || d.url,
					title: d.displayName,
					content: d.content,
					thumbnail: d.image && d.image.url,
					width: d.fullImage && d.fullImage.width,
					height: d.fullImage && d.fullImage.height
				};
				if (d.objectType == rv) {
					var f = qx(e.url);
					f && f.embed && (e.content = f.embed)
				}
				b.attach(d.objectType, e)
			});
		return b
	};
	var Uw = $.inherit(xx);
	Uw.prototype.content = F(A);
	Uw.prototype.data = function() {
		var a = this.base();
		a.Plus = !0;
		a.PostID = this.id;
		a.Comments = a.Notes = !!I().settings.comments_enabled && !!this.allowComments;
		a.Comments && (a.CommentCount = a.NoteCount = this.commentCount || 0, a.CommentCountWithLabel = a.CommentCount + ca + (1 != a.CommentCount ? nt : h), a.NoteCountWithLabel = a.CommentCountWithLabel);
		return a
	};

	function $z() {
		this.T()
	}
	var aA = {
			plus_base: "https://plus.google.com",
			plusapi_base: Yp,
			plus_key: "AIzaSyAH16LkZIgEhEx-wAoog7elYkd3djaMJGQ"
		},
		bA = /^plus:(\d+)$/;
	$z.prototype.owns = function(a) {
		return bA.test(a)
	};
	$z.prototype.iterator = function(a, b, c) {
		if (a = bA.exec(a)) return cA(), a = [V().settings.plusapi_base || Yp, og, a[1]].join(h), new Zz(new vx(new dA(a, b)), c || V().settings.batchSize)
	};
	$z.prototype.T = function() {
		cA();
		N().converter(Uw, function(a, b) {
			a.Ca || (a.Ca = a.data());
			b.scope(Wj, a.Ca);
			b.scope(Vj, !0);
			return a.Ca
		})
	};

	function cA() {
		for (var a in aA) V().settings[a] || (V().settings[a] = aA[a])
	}
	uz.push(new $z);

	function dA(a, b, c) {
		this.url = a;
		this.filter = b;
		this.id = c
	}
	dA.prototype.data = function() {
		var a = {};
		a.Title = this.title;
		a.PlusID = this.id;
		return a
	};

	function yy(a, b, c) {
		var d = window.jstiming;
		if (d && d.getLabels && d.getTick) {
			var e = {};
			for (a = a ? a.slice(0) : []; 0 < a.length;)
				for (var f = a.shift(), g = d.getLabels(f) || [], k = 0; k < g.length; ++k)
					if (g[k][0] !== ml && g[k] !== cu) {
						var l = d.getTick(f, g[k]);
						e[f.name] ? e[f.name].push({
							label: g[k],
							tick: l
						}) : e[f.name] = [{
							label: g[k],
							tick: l
						}]
					}
			for (var p in e) {
				d = [];
				for (a = 0; a < e[p].length; ++a) d.push(e[p][a].label + Ae + e[p][a].tick);
				a = $.extend({}, c);
				b && (a.e = b);
				var f = [],
					q;
				for (q in a) f.push(q + eh + a[q]);
				d = [Tf, Md + p, Rd + d.join(le), f ? Hd + f.join(Hd) : h].join(h);
				(new Image).src = d
			}
		}
	};
	var eA = {
			core: {
				view: X,
				gadget: qz
			},
			data: V,
			gadgets: function() {
				Ww || (Ww = new Vw);
				return Ww
			},
			modules: {
				Overview: Ky,
				Shortcuts: gz,
				Comments: jz,
				PlusComments: Oy,
				PlusCommentCount: function(a, b) {
					Ny(a, b)
				},
				ViewLightbox: pz
			},
			ui: I,
			templates: N,
			tools: {
				categorizer: Sw,
				Mosaic: Xw,
				path: O,
				PhotoLoader: bx,
				Photoset: cx,
				thumbnailer: R,
				data: U
			},
			views: []
		},
		fA;
	for (fA in eA) J[fA] = eA[fA];
	if (window.jstiming) {
		window.jstiming.rd = {};
		window.jstiming.sg = 1;
		var gA = function(a, b, c) {
			var d = a.t[b],
				e = a.t.start;
			if (d && (e || c)) return d = a.t[b][0], void 0 != c ? e = c : e = e[0], Math.round(d - e)
		};
		window.jstiming.getTick = gA;
		window.jstiming.getLabels = function(a) {
			var b = [],
				c;
			for (c in a.t) b.push(c);
			return b
		};
		var hA = function(a, b, c) {
				var d = h;
				window.jstiming.srt && (d += be + window.jstiming.srt, delete window.jstiming.srt);
				window.jstiming.pt && (d += ce + window.jstiming.pt, delete window.jstiming.pt);
				try {
					window.external && window.external.tran ?
						d += ee + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += ee + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += ee + window.chrome.csi().tran)
				} catch (n) {}
				var e = window.chrome;
				if (e && (e = e.loadTimes)) {
					e().wasFetchedViaSpdy && (d += Vd);
					if (e().wasNpnNegotiated) {
						var d = d + Td,
							f = e().npnNegotiatedProtocol;
						f && (d += Ud + (encodeURIComponent || escape)(f))
					}
					e().wasAlternateProtocolAvailable && (d += Od)
				}
				var g = a.t,
					k = g.start,
					e = [],
					f = [],
					l;
				for (l in g)
					if (l != cu && 0 != l.indexOf(ml)) {
						var p = g[l][1];
						p ? g[p] && f.push(l +
							Ae + gA(a, l, g[p][0])) : k && e.push(l + Ae + gA(a, l))
					}
				delete g.start;
				if (b)
					for (var q in b) d += Hd + q + eh + b[q];
				(b = c) || (b = Up == document.location.protocol ? Vp : Qp);
				return [b, ih, $d + (window.jstiming.sn || fm) + Md, a.name, f.length ? Rd + f.join(le) : h, d, Zd, e.join(le)].join(h)
			},
			iA = function(a, b, c) {
				a = hA(a, b, c);
				if (!a) return h;
				b = new Image;
				var d = window.jstiming.sg++;
				window.jstiming.rd[d] = b;
				b.onload = b.onerror = function() {
					window.jstiming && delete window.jstiming.rd[d]
				};
				b.src = a;
				b = null;
				return a
			};
		window.jstiming.report = function(a, b, c) {
			if (document.webkitVisibilityState ==
				vs) {
				var d = !1,
					e = function() {
						if (!d) {
							b ? b.prerender = sg : b = {
								prerender: sg
							};
							var f;
							document.webkitVisibilityState == vs ? f = !1 : (iA(a, b, c), f = !0);
							f && (d = !0, document.removeEventListener(Bv, e, !1))
						}
					};
				document.addEventListener(Bv, e, !1);
				return h
			}
			return iA(a, b, c)
		}
	};
})();
