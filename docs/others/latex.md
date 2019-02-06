# LaTeX

## TinyTex

A lightweight, cross-platform, portable, and easy-to-maintain LaTeX distribution based on TeX Live

<https://github.com/yihui/tinytex>

修改一下安装脚本，把 `pkgs-custom.txt` 和 `pkgs-yihui.txt` 都安装一下

### Other Packages

```
chktex
dvipng  # required by Matplotlib
```

## `tlmgr` Common Commands

```
tlmgr search --global --file "keywords"
tlmgr install [option...] pkg...
tlmgr update [option...] [pkg...]
```

<https://www.tug.org/texlive/doc/tlmgr.html>

---

## 中文支持

`\usepackage{ctex}`

TeX Live 完整安装，使用 XeLaTeX 编译

（英文版 Windows 需要自己手动安装中文字体，`Settings`>`Time & Language`>`Region & Language`>`中文`>`Options`>`Basic typing`）

---

## Escape

`& % $ # _ { } ~ ^ \`

Use `\ell` in place of `l` in math mode

---

## A4paper vs. Letterpaper

Quite a lot of old classes (e.g. `article`) don't set the pdf sizes. An option like `a4paper` sets only things like the TeX `\paperwidth`, the linewidth and similar lengths.

You will have to insert the necessary command yourself. For pdflatex this is

```latex
\pdfpagewidth = \paperwidth
\pdfpageheight = \paperheight
```

Btw: The people who can't reproduce your problem probably have a4paper as default. In this case they would see your problem if they used e.g. the option `letterpaper`.

### Change TeX Live Default Setting

```
tlmgr paper letter
tlmgr paper a4
```

---

## Set Noindent for Entire File

Global: use `\setlength{\parindent}{0pt}` in **preamble**.
Local : use `\noindent` in the front of that paragraph

---

## Beamer

```latex
%gets rid of bottom navigation bars
\setbeamertemplate{footline}[page number]{}

%gets rid of navigation symbols
\setbeamertemplate{navigation symbols}{}
```

---

## Personal Template

```latex
\documentclass{article}

% Improve typesetting.
\usepackage{microtype}

% Use geometry package to set up margins.
% A4 paper is 8.27 × 11.69 inch.
\usepackage[a4paper, width=6.27in, height=9.69in, includehead]{geometry}

% Set line spacing.
\usepackage{setspace}
\onehalfspacing%

\usepackage{booktabs}
\usepackage{multirow}
\usepackage{xcolor}
\usepackage{amsmath}

\colorlet{urlcolor}{red}

% Setup the hyperref package for enabling links, bookmarks, and PDF properties.
\usepackage[hyphens]{url} % Embedding URL's in document.
\usepackage{hyperref}
\hypersetup{
    colorlinks = true,
    citecolor  = blue
}

% Must come as late as possible, especially after hyperref.
\usepackage[capitalise]{cleveref}

% \newcommand{\todo}[1]{\textcolor{blue}{[To-do: #1]}}

\begin{document}

\begin{center}
	\Large\textbf{Title}\\[5pt]
	\normalsize Author\\\today
\end{center}

\section{Introduction}

Your text

\pagebreak

\bibliography{ref}
\bibliographystyle{plain}

\end{document}
```

---

## Change Math Color

<https://tex.stackexchange.com/questions/347268/change-math-color-globallyx>

```latex
\definecolor{math}{HTML}{0c7f99}
\everymath{\color{math}}
% \everydisplay{\color{math}}
\let\displaystyle\textstyle% % Compatible with `align' environment
```